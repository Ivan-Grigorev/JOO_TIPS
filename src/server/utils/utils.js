// Import the necessary modules
const User = require("../models/user/user");
const moment = require("moment");
const mails = require("./mailer.js");
require("colors");

// Define an asynchronous function to check the subscription time for all users
async function autoCheckSubscriptionTime() {
  try {
    // Get the current time
    const currentTime = moment();
    // Define the length of one day in milliseconds
    const oneDayInMs = 24 * 60 * 60 * 1000;
    // Define the length of seven days (one week) in milliseconds
    const sevenDaysInMs = oneDayInMs * 7;

    // Fetch all users from the database
    const users = await User.find({}).exec();

    // Prepare an array for storing promises for sending emails
    const emailPromises = [];

    // Loop over each user
    for (const user of users) {
      // Prepare the email data
      let emailPromise;
      // Format the expiration date and time
      const endDate = moment(user.subscription.expired.endDate).format("DD-MM-YYYY"); // prettier-ignore
      const endTime = moment(user.subscription.expired.endTime).format("HH:mm");
      // Prepare the email content for reminders of one day and one week
      const daySubject = "Ваша підписка на JooTips закінчиться за 24 години!";
      const dayHTML = `
        <p>Доброго дня, <strong>${user.name}</strong>,</p>
        <p>Це ваше останнє нагадування про те, що ваша підписка на наш сервіс закінчується за 24 години о ${endTime}.</strong>.</p>
        <p>Ми хотіли б продовжити надавати вам нашу кращу послугу без перерви. Якщо ви хочете продовжити свою підписку, будь ласка, перейдіть за наступним посиланням: <a href="#">[посилання на продовження підписки].</a>.</p>
        <p>Пам'ятайте, що наша команда завжди готова допомогти вам, якщо у вас виникнуть запитання або проблеми.</p>
        <p>Дякуємо за довіру до нашого сервісу.</p>
        <p>З повагою,</p>
        <p>Команда <strong>JooTips</strong>.</p>`;
      const weekSubject = "Нагадування про закінчення підписки на JooTips за тиждень"; // prettier-ignore
      const weekHTML = `
      <p>Доброго дня, <strong>${user.name}</strong>,</p>
      <p>Ми сподіваємося, що вам подобається наш сервіс! Ми хотіли б нагадати, що ваша поточна підписка закінчується за тиждень, <strong>${endDate} о ${endTime}</strong>.</p>
      <p>Увесь цей час ми докладали зусиль, щоб надати вам якісний сервіс і сподіваємося, що він виправдав ваші очікування. Якщо ви хочете продовжити користуватися всіма перевагами нашого сервісу без перерви, будь ласка, перейдіть за наступним посиланням, щоб продовжити вашу підписку: <a href="#">[посилання на продовження підписки].</a></p>
      <p>Якщо у вас виникнуть запитання або вам потрібна додаткова допомога, будь ласка, не соромтеся зв'язатися з нами.</p>
      <p>Дякуємо, що обрали наш сервіс.</p>
      <p>З повагою,</p>
      <p>Команда <strong>JooTips</strong>.</p>`;

      // Calculate the remaining time of the subscription in milliseconds
      const expirationDate = moment(user.subscription.expired.endDate);
      const remainingTimeInMs = expirationDate.diff(currentTime);

      // Check if the subscription has already expired
      if (remainingTimeInMs <= 0) {
        console.log(`User ${user.email} - subscription time has expired`);
        // Skip to the next user (end this iteration)
        continue;
      }

      // Check if the subscription will expire within one day
      if (remainingTimeInMs <= oneDayInMs) {
        console.log(`User ${user.email} - subscription will expire in 1 day`);
        emailPromise = mails.sendSubscriptionRemind(
          user.email,
          user.name,
          daySubject,
          dayHTML
        );
      }
      // Check if the subscription will expire within one week
      else if (remainingTimeInMs <= sevenDaysInMs) {
        console.log(`User ${user.email} - subscription will expire in 1 week`);
        emailPromise = mails.sendSubscriptionRemind(
          user.email,
          user.name,
          weekSubject,
          weekHTML
        );
      }

      // If there is an email to be sent, add its promise to the array
      if (emailPromise) emailPromises.push(emailPromise);
    }

    // Wait for all emails to be sent
    await Promise.all(emailPromises);
  } catch (error) {
    // Catch and log any errors that occur during the execution of the function
    console.error("Error when checking subscription time:", error);
  }
}

// Export the function for use in other parts of the application
module.exports = {
  autoCheckSubscriptionTime,
};
