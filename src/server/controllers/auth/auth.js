const User = require("../../models/user/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const moment = require("moment-timezone");
const sendMail = require("../../utils/mailer.js");
require("colors");
moment.tz.setDefault("Europe/Prague");

async function signup(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    bcrypt.genSalt(10, async (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return next(err);

        const newUser = await User.create({
          name,
          email,
          password: hash,
          profile: {
            about: null,
            username: null,
            interfaceLanguage: "English",
            notifications: true,
          },
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
          registrationDate: new Date(),
        });

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
          expiresIn: "12h",
        });

        bcrypt.hash(`User#${newUser._id}}`, salt, async (err, usernameHash) => {
          if (err) return next(err);

          newUser.token = token;
          newUser.profile.username = `User-${usernameHash}`;
          await newUser.save();

          req.user.token = token;

          const subject = "Ласкаво просимо до JooTips!";
          const HTML = `<p>Привіт <strong>${newUser.name}</strong>,</p>
        <p>Дякуємо вам за реєстрацію на <strong>JooTips</strong>!</p>
        <p>Ми раді повідомити, що ваш обліковий запис був успішно створений. Тепер ви можете насолоджуватися всіма перевагами нашого сервісу, включаючи:</p>
        <p>
        1. Індивідуальні поради та рекомендації.<br>
        2. Доступ до ексклюзивних матеріалів та ресурсів.<br>
        3. Обмін досвідом та навчання зі спільнотою JooTips.
        </p>
        <p>Щоб почати, перейдіть за наступним посиланням: <a href="#">LINK</a></p>
        <p>Після активації облікового запису ви можете увійти в систему, використовуючи свій <strong>адресу електронної пошти та пароль.</strong></p>
        <p>Якщо у вас виникнуть питання або вам потрібна допомога, будь ласка, не соромтеся звертатися до нашої служби підтримки.</p>
        <p>З повагою, <strong>Команда JooTips</strong></p>
        `;

          //! await sendMail(newUser.email, newUser.name, subject, HTML);

          return res.status(201).json({
            user: {
              name: newUser.name,
              email: newUser.email,
              subscription: newUser.subscription,
              registrationDate: newUser.registrationDate,
            },
            profile: {
              username: newUser.profile.username,
              about: newUser.profile.about,
              interfaceLanguage: newUser.profile.interfaceLanguage,
              notifications: newUser.profile.notifications,
            },
            token: newUser.token,
          });
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

      const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
        expiresIn: "12h",
      });

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
          username: user.profile.username,
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
    const { id } = req.user;
    const user = await User.findById(id);

    res.status(200).json({
      user: {
        name: user.name,
        avatar: user.avatar,
        email: user.email,
        phone: user.phone,
      },
      profile: { ...user.profile },
    });
  } catch (error) {
    console.log(`${error}`.red);
    res.status(500).json({ message: "Internal server error" });
  }
}

// An asynchronous function to handle user password recovery
async function sendRecoverMail(req, res, next) {
  try {
    // Extracting user's id from the request
    const id = req.user.id;

    // Generating a JSON Web Token (JWT) based on user's id
    // Note: process.env.JWT_SECRET should be a private key stored in your environment variables
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // This token will expire in 1 hour
    });

    // Update the user document with a recovery password token
    const user = await User.findByIdAndUpdate(id, { recoverPasswordToken: token, }); // prettier-ignore

    // The subject of the recovery email
    const subject = "Password Recovery Instructions";

    // The content of the recovery email
    const html = `
      <p>Hello <strong>${user.name}</strong>,</p>
      <p>You have requested to recover your password. To proceed with this action, please follow the link below:</p>
      <p><a href="http://localhost:3001/signup/recover-password/${token}">Recover Password</a></p>
      <p>If you did not request this, please ignore this email.</p>
      <p>Best regards,</p>
      <p><strong>JooTips Team</strong></p>
    `;

    // Send the recovery email
    await sendMail(user.email, user.name, subject, html);

    // Response to client that the recovery email has been sent
    res.status(200).json({
      message: "A recovery email has been sent to your email address.",
    });
  } catch (error) {
    // If an error occurs, send a response with status code 500 and a corresponding message
    res
      .status(500)
      .send({ message: "Internal server error while recovering password" });
  }
}

async function isTokenValid(req, res, next) {
  try {
    // Find user with matching reset token
    const user = await User.findOne({ recoverPasswordToken: req.params.token });

    if (!user) return res.status(400).send({ message: "Invalid or expired token" }); // prettier-ignore

    // Redirect user to reset password page if valid: true
    res.status(200).json({ valid: true });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
}

// This function is used to update a user's password after reseting
async function setNewPassword(req, res, next) {
  try {
    // Extracting the new password from the request body
    const password = req.body.password;
    // Extracting the token from the request parameters
    const { token } = req.params;

    // Trying to find a user with the provided token
    const user = await User.findOne({ recoverPasswordToken: token });

    // If no user was found, return an error message
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found or link is not valid" });
    }

    // Generate a new salt
    bcrypt.genSalt(10, async (err, salt) => {
      if (err) return next(err);

      // Hash the new password with the salt
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return next(err);

        // Update the user's password, clear the token and save the changes
        user.token = null;
        user.password = hash;
        user.recoverPasswordToken = null;
        await user.save();

        // Set up the email content
        const subject = "Ваш пароль успішно оновлено";
        const HTML = `
        <p>Шановний користувач,</p>
        
        <p>Ми раді повідомити вам, що ваш <strong>пароль</strong> був успішно <strong>оновлений</strong>.</p>
        
        <p>Якщо ви не замовляли скидання пароля, будь ласка, негайно зв'яжіться з нами. Це може свідчити про спробу несанкціонованого доступу до вашого аккаунту.</p>
        
        <p>Ваші дії допомагають нам забезпечити безпеку вашого аккаунту. Дякуємо вам за увагу до цього питання.</p>
        
        <p>Якщо у вас виникнуть які-небудь питання, не соромтеся звертатися до нас.</p>
        
        <p>З повагою, команда підтримки.</p>
        `;

        // Send the user an email to confirm their password has been changed
        await sendMail(user.email, user.name, subject, HTML);
      });
    });

    // Send back a successful response
    res.status(204).end();
  } catch (error) {
    // If there's an error, return an internal server error response
    res.status(500).json({ message: "Internal server error" });
  }
}

// This function is used to change user password
async function changePassword(req, res, next) {
  try {
    const password = req.body.password;
    const { id } = req.user;

    bcrypt.genSalt(10, async (err, salt) => {
      if (err) return next(err);

      // Hash the new password with the salt
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return next(err);

        await User.findByIdAndUpdate(id, { password: hash });

        console.log("Changing password - Success!".green);
        res.status(201).json({ passwordChanged: true });
      });
    });
  } catch (error) {
    console.error(`error while changing user password: ${error.message}`.red);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function updateUserProfile(req, res, next) {
  try {
    // Обновляем пользовательские данные по идентификатору пользователя
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: req.body },
      { new: true, runValidators: true, useFindAndModify: false }
    );

    res.status(200).send({
      profile: { ...user.profile },
      user: {
        name: user.name,
        phone: user.phone,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (e) {
    console.error(`Error while updating user profile (auth): ${e}`);
    res.status(500).json({ message: "Internal server error." });
  }
}

async function deleteCurrentUser(req, res, next) {
  try {
    const user = await User.deleteOne({ _id: req.user.id });

    res.status(204).json(user);
  } catch (error) {
    res.status(500).json({ message: `Internal server error.` });
    // .json({ message: "Internal server error in deleteCurrentUser" });
  }
}

async function getSubscriptionDetails(req, res, next) {
  try {
    const currentTime = moment();
    const { id } = req.user;
    const user = await User.findById(id);
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
    const { id } = req.user;
    const expiration = req.body.subscription.expirationDate; // from redux dispatch

    const endDate = moment(moment().valueOf())
      .add(expiration, "days")
      .valueOf();

    const subscription = {
      type: req.body.subscription.type,
      isPremium: true,
      expired: { startDate: moment().valueOf(), endDate },
    };

    const user = await User.findByIdAndUpdate(
      id,
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
    const { id } = req.user;
    const userOldSubscriptionType = req.body.subscriptionType;

    const initialSubscription = {
      type: userOldSubscriptionType,
      isPremium: false,
      expired: {
        startDate: null,
        endDate: null,
      },
    };

    const user = await User.findByIdAndUpdate(
      id,
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
  sendRecoverMail,
  setNewPassword,
  updateUserProfile,
  updateUserSubscription,
  getSubscriptionDetails,
  resetUserSubscription,
  deleteCurrentUser,
  isTokenValid,
  changePassword,
};
