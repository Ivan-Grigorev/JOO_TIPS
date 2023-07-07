const nodemailer = require("nodemailer");
require("dotenv").config();

const smtpConfig = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDEREMAIL,
    pass: process.env.PASSWORD,
  },
};

const transporter = nodemailer.createTransport(smtpConfig);

const sendSubscriptionRemind = async (emailTO, username, subject, html) => {
  try {
    const mailOptions = {
      from: process.env.SENDEREMAIL,
      to: emailTO,
      subject,
      html
    };

    await transporter.sendMail(mailOptions);
    console.log(`Remind mail to ${emailTO} for user ${username} is successfully sent!`.yellow);
  } catch (error) {
    console.error(`Oups, something went wrong while sending subscription remind :(`.red);
    console.error(`${error.message}`.red);
  }
};

module.exports = { sendSubscriptionRemind };
