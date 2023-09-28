const Lesson = require("../../models/lessons/lessons");
const moment = require("moment");

// todo добавить язык по которому идёт поиск
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
    // Find all lessons and select only the "cards" field
    const lessons = await Lesson.find({ userId, language }, "cards");

    // Create Sets to store unique identifiers
    const allTakenCardsIDs = new Set();
    const weekTakenCardsIDs = new Set();
    const monthTakenCardsIDs = new Set();

    // Get the current date
    const currentDate = moment();

    // Extract card references from each lesson and add them to Sets
    lessons.forEach((lesson) => {
      lesson.cards.forEach((cardId) => {
        allTakenCardsIDs.add(cardId);

        // Check if the lesson was within the week
        const lessonInWeek = moment(lesson.lessonDate).isSameOrAfter(currentDate.clone().subtract(7, "days")); // prettier-ignore
        if (lessonInWeek) weekTakenCardsIDs.add(cardId);

        // Check if the lesson was within the month
        const lessonInMonth = moment(lesson.lessonDate).isSameOrAfter(currentDate.clone().subtract(1, "months")); // prettier-ignore
        if (lessonInMonth) monthTakenCardsIDs.add(cardId);
      });
    });

    // Convert Sets back to arrays
    const allTakenCardsIDsArray = [...allTakenCardsIDs];
    const weekTakenCardsIDsArray = [...weekTakenCardsIDs];
    const monthTakenCardsIDsArray = [...monthTakenCardsIDs];

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
