const User = require("../../models/user/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const moment = require("moment-timezone");
const { getUserMac } = require("../../utils/utils.js");
const sendMail = require("../../utils/mailer.js");
require("colors");
moment.tz.setDefault("Europe/Prague");

async function signup(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress; // saving an user IP address

    // const macAddress = await getUserMac()

    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(password, salt, (err, hash) => {
        if (err) return next(err);

        const token = jwt.sign(
          { email: req.user.email }, // hashed email
          process.env.JWT_SECRET, // secret password
          { expiresIn: "12h" } // life-time of the token
        );

        req.user.token = token;

        const user = {
          name,
          email,
          token,
          password: hash,
          subscription: {
            type: "Common",
            isPremium: false,
            expired: {
              startDate: null,
              endDate: null,
            },
          },
          IP: {
            firstUserIP: userIP,
            lastUserIP: userIP,
          },
          deviceInfo: {
            os: req.user.deviceInfo.os,
            device: req.user.deviceInfo.device,
            browser: req.user.deviceInfo.browser,
          },

          // macAddress: macAddress,
          registrationDate: new Date(),
        };

        User.create(user);

        return res.status(201).json({
          user: {
            name: user.name,
            email: user.email,
            subscription: user.subscription,
            registrationDate: new Date(),
          },
          token: user.token,
        });
      });
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function login(req, res, next) {
  try {
    const password = req.body.password; //* take a password from the request body
    const userPassword = req.user.password; //* take a password from the user, stored on the past middleware
    const userVerify = req.user.verify; //* take an verify status from the user

    if (userVerify === false)
      res.status(403).json({ message: "Not verified." });

    bcrypt.compare(password, userPassword, async (err, result) => {
      if (err) return next(err);

      if (result === false) return res.status(401).json({ message: "Email or password is wrong." }); // prettier-ignore

      const token = jwt.sign(
        { email: req.user.email }, // hashed email
        process.env.JWT_SECRET, // secret password
        { expiresIn: "12h" } // life-time of the token
      );

      req.user.token = token;

      const user = await User.findByIdAndUpdate(req.user.id, req.user, {
        new: true,
      }); // set the token

      res.status(200).json({
        user: {
          name: user.name,
          avatar: user.avatar,
          email: user.email,
          phone: user.phone,
        },
        profile: {
          avatarName: user.profile.avatarName,
          about: user.profile.about,
          interfaceLanguage: user.profile.interfaceLanguage,
          notifications: user.profile.notifications,
        },
        token: user.token,
      });
    });
  } catch (error) {
    console.error(`Error while logging in: ${error}`.red);
    return res.status(401).json({ message: error });
  }
}

async function logout(req, res, next) {
  try {
    await User.findOneAndUpdate({ email: req.user.email }, { token: null }); // set the token

    return res.status(204).end();
  } catch (error) {
    console.error(`${error}`.red);
    return res.status(500).json({ message: "Logout error" });
  }
}

async function getCurrentUser(req, res, next) {
  try {
    const { email } = req.user;
    const user = await User.findOne({ email });

    res.status(200).json({
      user: {
        name: user.name,
        avatar: user.avatar,
        email: user.email,
        phone: user.phone,
      },
      site: { ...user.site },
    });
  } catch (error) {
    console.log(`${error}`.red);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function updateUserProfile(req, res, next) {
  try {
    const email = req.user.email;
    // Обновляем пользовательские данные по идентификатору пользователя
    const user = await User.findOneAndUpdate(
      { email },
      { $set: req.body },
      { new: true, runValidators: true, useFindAndModify: false }
    );

    res.status(200).send({
      profile: { ...user.site },
      user: { phone: user.phone, email: user.email },
    });
  } catch (e) {
    console.error(`Error while updating user profile (auth): ${e}`);
    res.status(500).json({ message: "Internal server error." });
  }
}

async function deleteCurrentUser(req, res, next) {
  try {
    const email = req.user.email;

    const user = await User.deleteOne({ email });

    res.status(204).json(user);
  } catch (error) {
    res.status(500).json({ message: `Internal server error.` });
    // .json({ message: "Internal server error in deleteCurrentUser" });
  }
}

async function getSubscriptionDetails(req, res, next) {
  try {
    const currentTime = moment();
    const { email } = req.user;
    const user = await User.findOne({ email });
    const expirationDate = moment(user.subscription.expired.endDate);

    const remainingTime = expirationDate.diff(currentTime);

    res.status(200).json({ ...user.subscription, remainingTime });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error(`Error while getting subscription time: ${error}`.red);
  }
}

async function updateUserSubscription(req, res, next) {
  try {
    const email = req.body.email;
    const expiration = req.body.subscription.expirationDate; // from redux dispatch

    const endDate = moment(moment().valueOf())
      .add(expiration, "days")
      .valueOf();

    const subscription = {
      type: req.body.subscription.type,
      isPremium: true,
      expired: { startDate: moment().valueOf(), endDate },
    };

    const user = await User.findOneAndUpdate(
      { email },
      { subscription },
      { new: true }
    );

    const ms = moment(endDate).diff(moment()); // prettier-ignore
    const expirationDate = `${Math.ceil(moment.duration(ms).asDays())} днiв.`;

    const subject = "Підтвердження платної підписки на сервісі JooTips";
    const HTML = `<p>Шановний користувачу,</p>
    <p>Ми хотіли б висловити щиру вдячність за ваше рішення укласти <strong>платну підписку</strong> на ${expirationDate} на нашому сервісі <strong>JooTips</strong>. Ваш вибір означає для нас набагато більше, ніж просто фінансову підтримку. Він підтверджує, що ви довіряєте нам і нашій роботі, а також визнаєте цінність, яку ми надаємо.</p>
    <p>Для обчислення періоду дії підписки ми використовуємо місяць, що рівний <strong>30 дням</strong>. Це зроблено для зручності і прозорості розрахунків.</p>
    <p>Ми прагнемо постійно поліпшувати наш сервіс і надавати вам <strong>найактуальніші та корисні поради</strong>. Ваша підписка дозволить нам продовжувати вкладати ресурси у дослідження, розробку та якість контенту, щоб ви могли отримувати максимальну користь від JooTips. </p>
    <p>Ваша довіра і підтримка означають для нас дуже багато. Ми зобов'язуємося продовжувати радувати вас цікавим і корисним матеріалом, постійно прагнути до поліпшення нашого сервісу та задоволення ваших потреб.</p>
    <p>Ще раз висловлюємо вам нашу вдячність за вибір <strong>JooTips</strong>. Якщо у вас є які-небудь питання, пропозиції або відгуки, будь ласка, не соромтеся <strong>звертатися до нас</strong>. Ми завжди готові допомогти вам.</p>
    <p>З найкращими побажаннями,</p>
    <p>Команда <strong>JooTips</strong>.</p>`;

    res.status(200).json(user.subscription);

    await sendMail(user.email, user.name, subject, HTML);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(`Error while updating user subscription: ${error}`.red);
  }
}

async function resetUserSubscription(req, res, next) {
  try {
    const email = req.user.email;
    const userOldSubscriptionType = req.body.subscriptionType;

    const initialSubscription = {
      type: userOldSubscriptionType,
      isPremium: false,
      expired: {
        startDate: null,
        endDate: null,
      },
    };

    const user = await User.findOneAndUpdate(
      { email },
      { subscription: initialSubscription },
      { new: true }
    );
    return res.status(200).json(user.subscription);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error while reseting user subscription",
    });
  }
}

module.exports = {
  signup,
  login,
  logout,
  getCurrentUser,
  updateUserProfile,
  updateUserSubscription,
  getSubscriptionDetails,
  resetUserSubscription,
  deleteCurrentUser,
};
