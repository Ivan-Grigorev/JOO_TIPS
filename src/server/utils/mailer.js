const nodemailer = require("nodemailer");
require("dotenv").config();
require("colors");

const smtpConfig = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDEREMAIL,
    pass: process.env.PASSWORD,
  },
};

const sendWeekSubscriptionRemind = (emailTO, username, endDate, endTime) => {
  try {
    const transporter = nodemailer.createTransport(smtpConfig);
    const mailOptions = {
      from: process.env.SENDEREMAIL,
      to: emailTO,
      subject: "Нагадування про закінчення підписки на JooTips за тиждень",
      html: `
      <p>Доброго дня, <strong>${username}</strong>,</p>
      <p>Ми сподіваємося, що вам подобається наш сервіс! Ми хотіли б нагадати, що ваша поточна підписка закінчується за тиждень, <strong>${endDate} о ${endTime}</strong>.</p>
      <p>Увесь цей час ми докладали зусиль, щоб надати вам якісний сервіс і сподіваємося, що він виправдав ваші очікування. Якщо ви хочете продовжити користуватися всіма перевагами нашого сервісу без перерви, будь ласка, перейдіть за наступним посиланням, щоб продовжити вашу підписку: <a href="#">[посилання на продовження підписки].</a></p>
      <p>Якщо у вас виникнуть запитання або вам потрібна додаткова допомога, будь ласка, не соромтеся зв'язатися з нами.</p>
      <p>Дякуємо, що обрали наш сервіс.</p>
      <p>З повагою,</p>
      <p>Команда <strong>JooTips</strong>.</p>`,
    };

    transporter.sendMail(mailOptions);
    console.log(
      `Remind mail to ${emailTO} for user ${username} is successfully sent!`
        .yellow
    );
  } catch (error) {
    console.error(
      `Oups, something went wrong while send week subscription remind :(`.red
    );
    console.error(`${error.message}`.red);
  }
};
module.exports = { sendWeekSubscriptionRemind };
