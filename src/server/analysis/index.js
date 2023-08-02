const User = require("../models/user/user.js");
const sendMail = require("../utils/mailer.js");

async function calculateMetricsAndSendEmail() {
  const analysisEmail = process.env.ANALYSIS_EMAIL;
  try {
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    // Загальне число користувачів
    const totalUsers = await User.countDocuments();
    const totalUsersLastMonth = await User.countDocuments({
      registrationDate: { $lt: lastMonth },
    });
    const growthTotalUsers =
      totalUsersLastMonth > 0
        ? (totalUsers / totalUsersLastMonth - 1) * 100
        : 0;

    // Шкільні користувачі
    const schoolUsers = await User.countDocuments({
      "subscription.type": "School",
    });
    const schoolUsersLastMonth = await User.countDocuments({
      "subscription.type": "School",
      registrationDate: { $lt: lastMonth },
    });
    const growthSchoolUsers =
      schoolUsersLastMonth > 0
        ? (schoolUsers / schoolUsersLastMonth - 1) * 100
        : 0;

    // Звичайні користувачі
    const commonUsers = await User.countDocuments({
      "subscription.type": "Common",
    });
    const commonUsersLastMonth = await User.countDocuments({
      "subscription.type": "Common",
      registrationDate: { $lt: lastMonth },
    });
    const growthCommonUsers =
      commonUsersLastMonth > 0
        ? (commonUsers / commonUsersLastMonth - 1) * 100
        : 0;

    // Шкільні платні користувачі
    const schoolPremiumUsers = await User.countDocuments({
      "subscription.type": "School",
      "subscription.isPremium": true,
    });
    const schoolPremiumUsersLastMonth = await User.countDocuments({
      "subscription.type": "School",
      "subscription.isPremium": true,
      registrationDate: { $lt: lastMonth },
    });
    const growthSchoolPremiumUsers =
      schoolPremiumUsersLastMonth > 0
        ? (schoolPremiumUsers / schoolPremiumUsersLastMonth - 1) * 100
        : 0;

    // Звичайні платні користувачі
    const commonPremiumUsers = await User.countDocuments({
      "subscription.type": "Common",
      "subscription.isPremium": true,
    });
    const commonPremiumUsersLastMonth = await User.countDocuments({
      "subscription.type": "Common",
      "subscription.isPremium": true,
      registrationDate: { $lt: lastMonth },
    });
    const growthCommonPremiumUsers =
      commonPremiumUsersLastMonth > 0
        ? (commonPremiumUsers / commonPremiumUsersLastMonth - 1) * 100
        : 0;

    // Формування листа
    const subject = "Analytic mail";
    const HTML = `
    <h1>Місячний аналітичний звіт академії програмування</h1>

    <h2>Загальна інформація</h2>
    <p>Кількість користувачів на кінець поточної когорти: ${totalUsers}</p>
    <p>Приріст користувачів: ${growthTotalUsers.toFixed(2)}%</p>
    
    <h2>Шкільні користувачі</h2>
    <p>Кількість: ${schoolUsers}</p>
    <p>Приріст: ${growthSchoolUsers.toFixed(2)}%</p>

    <h2>Звичайні користувачі</h2>
    <p>Кількість: ${commonUsers}</p>
    <p>Приріст: ${growthCommonUsers.toFixed(2)}%</p>

    <h2>Шкільні платні користувачі</h2>
    <p>Кількість: ${schoolPremiumUsers}</p>
    <p>Приріст: ${growthSchoolPremiumUsers.toFixed(2)}%</p>

    <h2>Звичайні платні користувачі</h2>
    <p>Кількість: ${commonPremiumUsers}</p>
    <p>Приріст: ${growthCommonPremiumUsers.toFixed(2)}%</p>
    `;

    await sendMail(analysisEmail, "Analytic", subject, HTML);
  } catch (error) {
    console.error("Error while calculating metrics:", error);
  }
}

module.exports = calculateMetricsAndSendEmail;
// Запуск функції кожні 15 хвилин
// setInterval(calculateMetricsAndSendEmail, 15 * 60 * 1000);
