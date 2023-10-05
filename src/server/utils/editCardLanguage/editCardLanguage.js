const Card = require("../../models/Card/Card");
require("colors");

async function editCardLanguage(language) {
  try {
    // Находим все карты с языком "JavaScript"
    const cards = await Card.find({ language });

    console.log(`Найдено ${cards.length} карт с языком "${language}"`.yellow);

    // Обновляем поле language для каждой карты
    for (let i = 0; i < cards.length; i++) {
      cards[i].language = cards[i].language.toLowerCase();
      await cards[i].save(); // Сохраняем обновленную карту
    }

    console.log(`Обновлено ${cards.length} карт`.yellow);
  } catch (e) {
    console.error("Ошибка при обновлении языка карт:".red, e);
  }
}

module.exports = editCardLanguage;
