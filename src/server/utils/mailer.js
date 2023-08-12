const nodemailer = require("nodemailer");
require("dotenv").config();

// SMTP configuration for sending emails using Gmail
const smtpConfig = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDEREMAIL, // Sender's email address
    pass: process.env.PASSWORD, // Sender's email password or app password
  },
};

// Create a transporter using the SMTP configuration
const transporter = nodemailer.createTransport(smtpConfig);

// Function to send an email
const sendMail = async (emailTO, username, subject, html) => {
  try {
    const mailOptions = {
      from: process.env.SENDEREMAIL, // Sender's email address
      to: emailTO, // Recipient's email address
      subject, // Subject of the email
      html, // HTML content of the email
    };

    await transporter.sendMail(mailOptions); // Send the email using the transporter
    console.log(
      `Mail to ${emailTO} for user ${username} is successfully sent!`.yellow
    ); // Log success message
  } catch (error) {
    console.error(
      `Oups, something went wrong while sending subscription reminder :(`.red
    ); // Log error message
    console.error(`${error.message}`.red); // Log the error details
  }
};

// Export the sendMail function for use in other modules
module.exports = sendMail;
