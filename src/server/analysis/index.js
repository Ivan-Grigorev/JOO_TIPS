const User = require("../models/user/user.js");
const sendMail = require("../utils/mailer.js");

async function calculateMetricsAndSendEmail() {
  const analysisEmail = process.env.ANALYSIS_EMAIL;
  try {
    // Припустимо, що звітна когорта триває місяць
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1); // Визначення дати початку попереднього місяця

    // Отримання кількості користувачів на кінець поточної звітної когорти
    const totalUsers = await User.countDocuments();

    // Отримання кількості користувачів на кінець попередньої звітної когорти
    const totalUsersLastMonth = await User.countDocuments({
      registrationDate: { $lt: lastMonth },
    });

    // Розрахунок приросту користувачів
    const growthTotalUsers = (totalUsers / totalUsersLastMonth - 1) * 100;

    // Оформлення листа
    const subject = "Analytic mail";
    const HTML = `<h1>Місячний аналітичний звіт академії програмування</h1>

    <h2>Загальна інформація</h2>
    <p>Кількість користувачів на кінець поточної когорти: ${totalUsers}</p>
    <p>Кількість користувачів на кінець попередньої когорти: ${totalUsersLastMonth}</p>
    <p>Приріст користувачів: ${growthTotalUsers.toFixed(2)}%</p>

    // Тут можна додати аналогічні розрахунки та відображення даних для:
    // - шкільних користувачів;
    // - звичайних користувачів;
    // - шкільних платних користувачів;
    // - звичайних платних користувачів;
    // - співвідношення платних до безплатних користувачів і т. д.
`;

    // Відправлення листа
    await sendMail(analysisEmail, "Analytic mail", subject, HTML);
  } catch (error) {
    // Виведення помилок при їх наявності
    console.error("Error while calculating metrics:", error);
  }
}

module.exports = calculateMetricsAndSendEmail
// Запуск функції кожні 15 хвилин
// setInterval(calculateMetricsAndSendEmail, 15 * 60 * 1000);