const User = require("../models/user/user.js");
const sendMail = require("../utils/mailer.js");
const writeToSheet = require("./googleSheet.js");

const EMAIL_INTERVAL = 15 * 60 * 1000; // 15 minutes in milliseconds
const DEFAULT_COUNTRY = "Unknown";

// Returns the date one month ago from the current date.
const getDateOneMonthAgo = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return date;
};

// Returns the date one week ago from the current date.
const getDateOneWeekAgo = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date;
};

// Calculates growth percentage between current and previous values.
const calculateGrowth = (current, previous) => {
  return previous > 0 ? ((current / previous - 1) * 100).toFixed(2) : 0;
};

// Calculates metrics and sends email report.
async function calculateMetricsAndSendEmail() {
  const analysisEmail = process.env.ANALYSIS_EMAIL;

  try {
    // Get dates for the last month and last week.
    const lastMonth = getDateOneMonthAgo();
    const lastWeek = getDateOneWeekAgo();

    // Retrieve unique countries of registered users from the last week.
    const uniqueCountriesLastWeek = await User.distinct("country", {
      registrationDate: { $gte: lastWeek },
    });
    const countriesList = uniqueCountriesLastWeek.join(", ");

    // Retrieve the top country by user count.
    const topCountryData = await User.aggregate([
      { $group: { _id: "$country", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 },
    ]);
    const topCountry = topCountryData[0]?._id || DEFAULT_COUNTRY;

    // Retrieve various user counts based on subscription type and timeframe.
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

    // Calculate growth percentages for different user metrics.
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

    // Prepare HTML content for the email.
    const HTML = `
      <h1>Monthly Analytic Report for Programming Academy</h1>
      <h2>General Information</h2>

      <p>Total users at the end of current cohort: ${totalUsers}</p>
      <p>Monthly growth in users: ${growthData.totalUsers}%</p>
     
      <h2>School Users</h2>
      <p>Count: ${schoolUsers}</p>
      <p>Monthly growth: ${growthData.schoolUsers}%</p>
    
      <h2>Common Users</h2>
      <p>Count: ${commonUsers}</p>
      <p>Monthly growth: ${growthData.commonUsers}%</p>
  
      <h2>School Premium Users</h2>
      <p>Count: ${schoolPremiumUsers}</p>
      <p>Monthly growth: ${growthData.schoolPremiumUsers}%</p>
  
      <h2>Common Premium Users</h2>
      <p>Count: ${commonPremiumUsers}</p>
      <p>Monthly growth: ${growthData.commonPremiumUsers}%</p>
  
      <h2>Country Statistics</h2>
      <p>Most users from country: ${topCountry}</p>
      <p>Users registered in the last week from: ${countriesList}</p>
    `;

    // Send the analytic email.
    await sendMail(analysisEmail, "Analytic", "Analytic mail", HTML);

    // Prepare data for writing to Google Sheet.
    const writableData = [
      ["Metric", "Value", "Growth"], // headers
      ["Total Users", totalUsers, growthData.totalUsers + "%"],
      ["School Users", schoolUsers, growthData.schoolUsers + "%"],
      ["Common Users", commonUsers, growthData.commonUsers + "%"],
      [
        "School Premium Users",
        schoolPremiumUsers,
        growthData.schoolPremiumUsers + "%",
      ],
      [
        "Common Premium Users",
        commonPremiumUsers,
        growthData.commonPremiumUsers + "%",
      ],
      ["Top Country", topCountry, ""], // No growth data for country
      ["Countries Registered Last Week", countriesList, ""], // No growth data for list of countries
    ];

    // Write data to Google Sheet.
    await writeToSheet(writableData);
    console.log("Data written to the spreadsheet");
  } catch (error) {
    console.error("Error while calculating metrics:", error);
  }
}

module.exports = calculateMetricsAndSendEmail;

// setInterval(calculateMetricsAndSendEmail, EMAIL_INTERVAL);
