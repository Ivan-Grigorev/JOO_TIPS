const Lesson = require("../../models/lessons/lessons");
const User = require("../../models/user/user");
const getDaysInMonthAndWeek = require("./getDaysInMonthAndWeek");
const getUserLanguagesInfo = require("./getUserLanguagesInfo");

/**
 * Get unique card identifiers associated with a user's lessons.
 *
 * @async
 * @function getTakenCards
 * @param {string} userId - The user's identifier used for searching lessons.
 * @param {string} userLanguageObj - The user's language object used for taking used cards.
 * @param {string} language - The language used for searching lessons.
 * @returns {Promise<{ all: string[], week: string[], month: string[] }>} An object containing unique card identifiers.
 * @throws {Error} An error if there was an issue fetching the data.
 */
async function getTakenCards(userId, userLanguageObj, language) {
  let userLanguageObject = userLanguageObj;
  try {
    if (!userLanguageObj) {
      const user = await User.findById(userId);
      userLanguageObject = await getUserLanguagesInfo(user).userLanguageObject;
    }

    // Get the array of days in the current month and week
    const { week, month } = getDaysInMonthAndWeek();

    // Create RegExp patterns from dates
    const weekRegExp = new RegExp(week.map((date) => `^${date}`).join("|"));
    const monthRegExp = new RegExp(month.map((date) => `^${date}`).join("|"));

    // Execute two database queries concurrently using Promise.all
    const [weekLessons, monthLessons] = await Promise.all([
      Lesson.find(
        { userId, language, lessonDate: { $regex: weekRegExp } },
        "cards"
      ),
      Lesson.find(
        { userId, language, lessonDate: { $regex: monthRegExp } },
        "cards"
      ),
    ]);

    // Extract card references from the query results
    const allTakenCardsIDs = getAllTakenCards(userLanguageObject.topicStatuses);
    const weekTakenCardsIDs = new Set();
    const monthTakenCardsIDs = new Set();

    console.log("All taken cards count:".yellow, allTakenCardsIDs.size);

    const noWeekTakenCards = weekLessons.length === 0;
    const noMonthTakenCards = monthLessons.length === 0;

    if (noWeekTakenCards && noMonthTakenCards) {
      return { all: [...allTakenCardsIDs], week: [], month: [] };
    }

    weekLessons.forEach((lesson) => {
      lesson.cards.forEach((cardId) => {
        weekTakenCardsIDs.add(cardId.toString());
      });
    });

    monthLessons.forEach((lesson) => {
      lesson.cards.forEach((cardId) => {
        monthTakenCardsIDs.add(cardId.toString());
      });
    });

    // console.log({ weekTakenCardsIDsArray, monthTakenCardsIDsArray });

    return {
      all: [...allTakenCardsIDs],
      week: [...weekTakenCardsIDs],
      month: [...monthTakenCardsIDs],
    };
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw error;
  }
}

function getAllTakenCards(topicList) {
  const takenCards = new Set(); // Создаем массив для хранения объектов с cardRef

  topicList.forEach((obj) => {
    for (const viewArray in obj.cardViewStatus) {
      const ownProperty = obj.cardViewStatus.hasOwnProperty(viewArray);
      if (ownProperty) {
        const array = obj.cardViewStatus[viewArray];
        // Итерируем по объектам внутри массива
        array.forEach((item) => takenCards.add(item.cardRef.toString()));
      }
    }
  });

  return takenCards;
}

module.exports = getTakenCards;
