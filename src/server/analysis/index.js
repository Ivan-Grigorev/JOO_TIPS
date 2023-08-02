const User = require("../models/user/user.js");
const sendMail = require("../utils/mailer.js");

async function calculateMetricsAndSendEmail() {
  const analysisEmail = process.env.ANALYSIS_EMAIL;

  try {
    // Define the date boundaries
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7);

    const uniqueCountriesLastWeek = await User.distinct("country", {
      registrationDate: { $gte: lastWeek },
    });

    const countriesList = uniqueCountriesLastWeek.join(", ");

    const topCountryData = await User.aggregate([
      { $group: { _id: "$country", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 },
    ]);
    const topCountry = topCountryData[0]?._id || "Unknown";

    // Define a function to calculate growth
    const calculateGrowth = (current, previous) =>
      previous > 0 ? (current / previous - 1) * 100 : 0;

    // Fetch user statistics
    const [
      totalUsers,
      totalUsersLastMonth,
      schoolUsers,
      schoolUsersLastMonth,
      commonUsers,
      commonUsersLastMonth,
      schoolPremiumUsers,
      schoolPremiumUsersLastMonth,
      commonPremiumUsers,
      commonPremiumUsersLastMonth,
    ] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ registrationDate: { $lt: lastMonth } }),
      User.countDocuments({ "subscription.type": "School" }),
      User.countDocuments({
        "subscription.type": "School",
        registrationDate: { $lt: lastMonth },
      }),
      User.countDocuments({ "subscription.type": "Common" }),
      User.countDocuments({
        "subscription.type": "Common",
        registrationDate: { $gte: lastMonth },
      }),
      User.countDocuments({
        "subscription.type": "School",
        "subscription.isPremium": true,
      }),
      User.countDocuments({
        "subscription.type": "School",
        "subscription.isPremium": true,
        registrationDate: { $lt: lastMonth },
      }),
      User.countDocuments({
        "subscription.type": "Common",
        "subscription.isPremium": true,
      }),
      User.countDocuments({
        "subscription.type": "Common",
        "subscription.isPremium": true,
        registrationDate: { $lt: lastMonth },
      }),
    ]);

    // Calculate growth for each metric
    const growthTotalUsers = calculateGrowth(totalUsers, totalUsersLastMonth); // prettier-ignore
    const growthSchoolUsers = calculateGrowth(schoolUsers, schoolUsersLastMonth); // prettier-ignore
    const growthCommonUsers = calculateGrowth(commonUsers, commonUsersLastMonth); // prettier-ignore
    const growthSchoolPremiumUsers = calculateGrowth(schoolPremiumUsers, schoolPremiumUsersLastMonth); // prettier-ignore
    const growthCommonPremiumUsers = calculateGrowth(commonPremiumUsers, commonPremiumUsersLastMonth); // prettier-ignore

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

    <h2>Статистика по странам</h2>
    <p>Більше всього користувачів з країни: ${topCountry}</p>
    <p>На протязі останнього тижня зареєстровано користувачів з наступних краiн: ${countriesList}</p>

    `;

    await sendMail(analysisEmail, "Analytic", subject, HTML);
  } catch (error) {
    console.error("Error while calculating metrics:", error);
  }
}

module.exports = calculateMetricsAndSendEmail;
// Запуск функції кожні 15 хвилин
// setInterval(calculateMetricsAndSendEmail, 15 * 60 * 1000);
