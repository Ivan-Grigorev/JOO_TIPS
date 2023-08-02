const User = require("../models/user/user.js");
const sendMail = require("../utils/mailer.js");

const EMAIL_INTERVAL = 15 * 60 * 1000; // 15 minutes in milliseconds
const DEFAULT_COUNTRY = "Unknown";

const getDateOneMonthAgo = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return date;
};

const getDateOneWeekAgo = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date;
};

const calculateGrowth = (current, previous) => {
  return previous > 0 ? (current / previous - 1) * 100 : 0;
};

async function calculateMetricsAndSendEmail() {
  const analysisEmail = process.env.ANALYSIS_EMAIL;

  try {
    const lastMonth = getDateOneMonthAgo();
    const lastWeek = getDateOneWeekAgo();

    const uniqueCountriesLastWeek = await User.distinct("country", {
      registrationDate: { $gte: lastWeek },
    });
    const countriesList = uniqueCountriesLastWeek.join(", ");

    const topCountryData = await User.aggregate([
      { $group: { _id: "$country", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 },
    ]);
    const topCountry = topCountryData[0]?._id || DEFAULT_COUNTRY;

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
        registrationDate: { $lt: lastMonth },
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

    const growthData = {
      totalUsers: calculateGrowth(totalUsers, totalUsersLastMonth),
      schoolUsers: calculateGrowth(schoolUsers, schoolUsersLastMonth),
      commonUsers: calculateGrowth(commonUsers, commonUsersLastMonth),
      schoolPremiumUsers: calculateGrowth(
        schoolPremiumUsers,
        schoolPremiumUsersLastMonth
      ),
      commonPremiumUsers: calculateGrowth(
        commonPremiumUsers,
        commonPremiumUsersLastMonth
      ),
    };

    const HTML = `
      <h1>Місячний аналітичний звіт академії програмування</h1>
      <h2>Загальна інформація</h2>

      <p>Кількість користувачів на кінець поточної когорти: ${totalUsers}</p>
      <p>Приріст користувачів за мiсяць: ${growthData.totalUsers.toFixed(
        2
      )}%</p>
     
      <h2>Шкільні користувачі</h2>
      <p>Кількість: ${schoolUsers}</p>
      <p>Приріст за мiсяць: ${growthData.schoolUsers.toFixed(2)}%</p>
    
      <h2>Звичайні користувачі</h2>
      <p>Кількість: ${commonUsers}</p>
      <p>Приріст за мiсяць: ${growthData.commonUsers.toFixed(2)}%</p>
  
      <h2>Шкільні платні користувачі</h2>
      <p>Кількість: ${schoolPremiumUsers}</p>
      <p>Приріст за мiсяць: ${growthData.schoolPremiumUsers.toFixed(2)}%</p>
  
      <h2>Звичайні платні користувачі</h2>
      <p>Кількість: ${commonPremiumUsers}</p>
      <p>Приріст за мiсяць: ${growthData.commonPremiumUsers.toFixed(2)}%</p>
  
      <h2>Статистика по странам</h2>
      <p>Більше всього користувачів з країни: ${topCountry}</p>
      <p>На протязі останнього тижня зареєстровано користувачів з наступних краiн: ${countriesList}</p>
    `;

    await sendMail(analysisEmail, "Analytic", "Analytic mail", HTML);
  } catch (error) {
    console.error("Error while calculating metrics:", error);
  }
}

module.exports = calculateMetricsAndSendEmail;

// setInterval(calculateMetricsAndSendEmail, EMAIL_INTERVAL);
