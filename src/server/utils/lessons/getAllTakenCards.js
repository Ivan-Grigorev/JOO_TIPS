const Lesson = require("../../models/lessons/lessons");
const getDaysInMonthAndWeek = require("./getDaysInMonthAndWeek");

/**
 * Get unique card identifiers associated with a user's lessons.
 *
 * @async
 * @function getTakenCards
 * @param {string} userId - The user's identifier used for searching lessons.
 * @param {string} language - The language used for searching lessons.
 * @returns {Promise<{ all: string[], week: string[], month: string[] }>} An object containing unique card identifiers.
 * @throws {Error} An error if there was an issue fetching the data.
 */
async function getTakenCards(userId, language) {
  try {
    // Get the array of days in the current month and week

    const { week, month } = getDaysInMonthAndWeek();

    // Create RegExp patterns from dates
    const weekRegExp = new RegExp(week.map((date) => `^${date}`).join("|"));
    const monthRegExp = new RegExp(month.map((date) => `^${date}`).join("|"));

    // Execute two database queries concurrently using Promise.all
    const [weekLessons, monthLessons] = await Promise.all([
      Lesson.find(
        {
          userId,
          language,
          lessonDate: { $regex: weekRegExp },
        },
        "cards"
      ),
      Lesson.find(
        {
          userId,
          language,
          lessonDate: { $regex: monthRegExp },
        },
        "cards"
      ),
    ]);

    // Extract card references from the query results
    const allTakenCardsIDs = new Set();
    const weekTakenCardsIDs = new Set();
    const monthTakenCardsIDs = new Set();

    weekLessons.forEach((lesson) => {
      lesson.cards.forEach((cardId) => {
        allTakenCardsIDs.add(cardId.toString());
        weekTakenCardsIDs.add(cardId.toString());
      });
    });

    monthLessons.forEach((lesson) => {
      lesson.cards.forEach((cardId) => {
        allTakenCardsIDs.add(cardId.toString());
        monthTakenCardsIDs.add(cardId.toString());
      });
    });

    // Convert Sets back to arrays
    const allTakenCardsIDsArray = [...allTakenCardsIDs];
    const weekTakenCardsIDsArray = [...weekTakenCardsIDs];
    const monthTakenCardsIDsArray = [...monthTakenCardsIDs];

    // console.log({ weekTakenCardsIDsArray, monthTakenCardsIDsArray });

    return {
      all: allTakenCardsIDsArray,
      week: weekTakenCardsIDsArray,
      month: monthTakenCardsIDsArray,
    };
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw error;
  }
}

module.exports = getTakenCards;
