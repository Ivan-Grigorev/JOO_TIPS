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

const sendMail = async (emailTO, username, subject, html) => {
  try {
    const mailOptions = {
      from: process.env.SENDEREMAIL,
      to: emailTO,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Mail to ${emailTO} for user ${username} is successfully sent!`.yellow); // prettier-ignore
  } catch (error) {
    console.error( `Oups, something went wrong while sending subscription remind :(`.red ); // prettier-ignore
    console.error(`${error.message}`.red);
  }
};

module.exports = sendMail;
