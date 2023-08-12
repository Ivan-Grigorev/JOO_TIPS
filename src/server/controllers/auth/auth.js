const User = require("../../models/user/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const moment = require("moment-timezone");
const sendMail = require("../../utils/mailer.js");
const getCountryFromIP = require("../../utils/getCountryFromIP.js");
require("colors");
moment.tz.setDefault("Europe/Prague");

// This function handles user registration and account creation.
async function signup(req, res, next) {
  try {
    // Extract user details from the request body.
    const { name, email, password } = req.body;
    // Get the user's IP address.
    const userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    // Get user's country based on the IP address.
    const userCountry = await getCountryFromIP(userIP);

    // Generate a salt for password hashing using bcrypt.
    bcrypt.genSalt(10, async (err, salt) => {
      if (err) return next(err);

      // Hash the user's password with the generated salt.
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return next(err);

        // Create a new user using the provided details and hashed password.
        const newUser = await User.create({
          name,
          email,
          password: hash,
          country: userCountry || "not identified",
          // Initialize user profile and subscription details.
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
          // Store IP and device information.
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

        // Generate a JWT token for the newly registered user.
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
          expiresIn: "12h",
        });

        // Hash the user's ID and set it as part of the username for privacy.
        bcrypt.hash(`User#${newUser._id}}`, salt, async (err, usernameHash) => {
          if (err) return next(err);

          // Update the user's token and username in the database.
          newUser.token = token;
          newUser.profile.username = `User-${usernameHash}`;
          await newUser.save();

          // Update the token in the request user object.
          req.user.token = token;

          // Compose the welcome email subject and HTML content.
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

          // Uncomment the line below to send the welcome email.
          // await sendMail(newUser.email, newUser.name, subject, HTML);

          // Respond with the registered user's details and the generated token.
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
    // Handle errors by sending a 500 Internal Server Error response.
    return res.status(500).json({ message: "Internal server error" });
  }
}

// This function handles user login authentication.
async function login(req, res, next) {
  try {
    // Extract the password from the request body.
    const password = req.body.password;
    // Extract user's password and verify status from the user object (stored in previous middleware).
    const userPassword = req.user.password;
    const userVerify = req.user.verify;

    // Check if the user is not verified.
    if (userVerify === false)
      return res.status(403).json({ message: "Not verified." });

    // Compare the provided password with the stored user's password.
    bcrypt.compare(password, userPassword, async (err, result) => {
      if (err) return next(err);

      // If the passwords don't match, respond with an unauthorized status.
      if (result === false)
        return res.status(401).json({ message: "Email or password is wrong." });

      // Generate a JWT token for the authenticated user.
      const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
        expiresIn: "12h",
      });

      // Set the token in the request user object.
      req.user.token = token;

      // Update the user's token in the database.
      const user = await User.findByIdAndUpdate(req.user.id, req.user, {
        new: true,
      });

      // Respond with the user's details and the generated token.
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
    // Log the error and respond with an unauthorized status.
    console.error(`Error while logging in: ${error}`.red);
    return res.status(401).json({ message: error });
  }
}

// This function logs out the currently logged-in user by clearing their authentication token.
async function logout(req, res, next) {
  try {
    // Find the user by their email and update their token to null.
    await User.findOneAndUpdate({ email: req.user.email }, { token: null });

    // Respond with a success status and no content (204 No Content).
    return res.status(204).end();
  } catch (error) {
    // Log the error and send a 500 Internal Server Error response.
    console.error(`${error}`.red);
    return res.status(500).json({ message: "Logout error" });
  }
}

// This function retrieves the details of the currently logged-in user.
async function getCurrentUser(req, res, next) {
  try {
    // Extract the user ID from the request object.
    const { id } = req.user;

    // Find the user's information using their ID.
    const user = await User.findById(id);

    // Respond with a success status and the user's name, avatar, email, and phone.
    // Also include the user's profile details.
    res.status(200).json({
      user: {
        name: user.name,
        avatar: user.avatar,
        email: user.email,
        phone: user.phone,
      },
      profile: { ...user.profile }, // Copy the profile object.
    });
  } catch (error) {
    // Log the error and send a 500 Internal Server Error response.
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

// This function checks if a given reset token is valid for password recovery.
async function isTokenValid(req, res, next) {
  try {
    // Find a user with the provided reset token.
    const user = await User.findOne({ recoverPasswordToken: req.params.token });

    // If no user is found with the token, respond with an error message.
    if (!user)
      return res.status(400).send({ message: "Invalid or expired token" });

    // If a user is found with the token, respond with a success status and valid: true.
    res.status(200).json({ valid: true });
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response.
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

// This function is used to change the user's password.
async function changePassword(req, res, next) {
  try {
    // Extract the new password from the request body.
    const password = req.body.password;
    // Get the user's ID from the request object.
    const { id } = req.user;

    // Generate a salt for password hashing using bcrypt.
    bcrypt.genSalt(10, async (err, salt) => {
      if (err) return next(err);

      // Hash the new password with the generated salt.
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return next(err);

        // Update the user's password with the new hashed password in the database.
        await User.findByIdAndUpdate(id, { password: hash });

        // Log a success message and respond with a status indicating password change.
        console.log("Changing password - Success!".green);
        res.status(201).json({ passwordChanged: true });
      });
    });
  } catch (error) {
    // Handle errors by logging the error and sending a 500 Internal Server Error response.
    console.error(`error while changing user password: ${error.message}`.red);
    res.status(500).json({ message: "Internal server error" });
  }
}

// The updateUserProfile function updates the user's profile details based on provided input.
async function updateUserProfile(req, res) {
  try {
    // Destructure relevant properties from req.body for easier reference.
    const {
      phone,
      email,
      profile: { username, about, interfaceLanguage, notifications } = {}, // Provide a default empty object for profile to prevent potential errors from null/undefined values.
    } = req.body;

    // Retrieve the current user's data from the database using the user's ID from the request object.
    const user = await User.findById(req.user.id);

    // Update properties if they have a value.
    if (phone) user.phone = phone;
    if (email) user.email = email;
    if (username) user.profile.username = username;
    if (about) user.profile.about = about;
    if (interfaceLanguage) user.profile.interfaceLanguage = interfaceLanguage;
    if (notifications !== undefined) user.profile.notifications = notifications;

    // Save the updated user details back to the database.
    await user.save();

    // Respond to the client with the updated profile details.
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
    // Log any errors encountered during the update process.
    console.error(`Error while updating user profile (auth): ${e}`);
    // Respond to the client with a 500 Internal Server Error status and error message.
    res.status(500).json({ message: "Internal server error." });
  }
}

// This function deletes the currently logged-in user.
async function deleteCurrentUser(req, res, next) {
  try {
    // Delete the user from the database based on their ID.
    const user = await User.deleteOne({ _id: req.user.id });

    // Respond with a success status and no content (204 No Content).
    res.status(204).json(user);
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response.
    res.status(500).json({ message: `Internal server error.` });
  }
}

// This function retrieves subscription details for the logged-in user.
async function getSubscriptionDetails(req, res, next) {
  try {
    // Get the current time using the Moment.js library.
    const currentTime = moment();
    // Extract the user ID from the request object.
    const { id } = req.user;

    // Retrieve the user's information from the database.
    const user = await User.findById(id);
    // Get the expiration date of the user's subscription.
    const expirationDate = moment(user.subscription.expired.endDate);

    // Calculate the remaining time until the subscription expires.
    const remainingTime = expirationDate.diff(currentTime);

    // Respond with a success status and include subscription details along with remaining time.
    res.status(200).json({ ...user.subscription, remainingTime });
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response.
    res.status(500).json({ message: "Internal server error" });
    console.error(`Error while getting subscription time: ${error}`.red);
  }
}

// This function updates a user's subscription and sends a confirmation email.
async function updateUserSubscription(req, res, next) {
  try {
    const { id } = req.user;
    const expiration = req.body.subscription.expirationDate; // Get expiration days from redux dispatch

    // Calculate the subscription's end date based on the current date and expiration days.
    const endDate = moment(moment().valueOf())
      .add(expiration, "days")
      .valueOf();

    // Define the updated subscription details.
    const subscription = {
      type: req.body.subscription.type,
      isPremium: true,
      expired: { startDate: moment().valueOf(), endDate },
    };

    // Update the user's subscription information in the database.
    const user = await User.findByIdAndUpdate(
      id,
      { subscription },
      { new: true }
    );

    // Calculate the remaining days of the subscription.
    const ms = moment(endDate).diff(moment()); // prettier-ignore
    const expirationDate = `${Math.ceil(moment.duration(ms).asDays())} days`;

    // Compose the email subject and HTML content for the confirmation email.
    const subject = "Підтвердження платної підписки на сервісі JooTips";
    const HTML = `<p>Шановний користувачу,</p>
    <p>Ми хотіли б висловити щиру вдячність за ваше рішення укласти <strong>платну підписку</strong> на ${expirationDate} на нашому сервісі <strong>JooTips</strong>. Ваш вибір означає для нас набагато більше, ніж просто фінансову підтримку. Він підтверджує, що ви довіряєте нам і нашій роботі, а також визнаєте цінність, яку ми надаємо.</p>
    <p>Для обчислення періоду дії підписки ми використовуємо місяць, що рівний <strong>30 дням</strong>. Це зроблено для зручності і прозорості розрахунків.</p>
    <p>Ми прагнемо постійно поліпшувати наш сервіс і надавати вам <strong>найактуальніші та корисні поради</strong>. Ваша підписка дозволить нам продовжувати вкладати ресурси у дослідження, розробку та якість контенту, щоб ви могли отримувати максимальну користь від JooTips. </p>
    <p>Ваша довіра і підтримка означають для нас дуже багато. Ми зобов'язуємося продовжувати радувати вас цікавим і корисним матеріалом, постійно прагнути до поліпшення нашого сервісу та задоволення ваших потреб.</p>
    <p>Ще раз висловлюємо вам нашу вдячність за вибір <strong>JooTips</strong>. Якщо у вас є які-небудь питання, пропозиції або відгуки, будь ласка, не соромтеся <strong>звертатися до нас</strong>. Ми завжди готові допомогти вам.</p>
    <p>З найкращими побажаннями,</p>
    <p>Команда <strong>JooTips</strong>.</p>`;

    // Respond with a success status and the updated subscription details.
    res.status(200).json(user.subscription);

    // Send the confirmation email to the user.
    await sendMail(user.email, user.name, subject, HTML);
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response.
    res.status(500).json({ message: "Internal Server Error" });
    console.error(`Error while updating user subscription: ${error}`.red);
  }
}

// This function resets a user's subscription to an initial state.
async function resetUserSubscription(req, res, next) {
  try {
    // Extract the user ID from the request object.
    const { id } = req.user;
    // Get the user's old subscription type from the request body.
    const userOldSubscriptionType = req.body.subscriptionType;

    // Define the initial subscription state.
    const initialSubscription = {
      type: userOldSubscriptionType,
      isPremium: false,
      expired: {
        startDate: null,
        endDate: null,
      },
    };

    // Update the user's subscription information in the database.
    const user = await User.findByIdAndUpdate(
      id,
      { subscription: initialSubscription },
      { new: true } // Return the updated user object after the update.
    );

    // Respond with a success status and the updated subscription details.
    return res.status(200).json(user.subscription);
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response.
    res.status(500).json({
      message: "Internal Server Error while resetting user subscription",
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
