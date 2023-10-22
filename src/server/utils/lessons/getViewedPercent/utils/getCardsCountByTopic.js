/**
 * Get the count of cards by topics.
 *
 * @returns {{n: Number, n1: Number ,n2: Number, n3: Number}} - An Object with counts for each topic.
 * @throws {Error} If there is an error while fetching the counts.
 */
function getCardsCountByTopics(languageObject) {
  try {
    const activeTopics = languageObject.activeTopicsRefs;
    const topicStatuses = languageObject.topicStatuses;
    const counts = {};

    for (let i = 0; i < activeTopics.length; i++) {
      // Create an array of strings (refs) for active topics
      const activeTopicsRefsArray = activeTopics.map((obj) => {
        return obj.ref.toString();
      });

      // Filter topic objects based on refs
      const topicsObjects = topicStatuses.filter((obj) => {
        return activeTopicsRefsArray.includes(obj.topicRef.toString());
      });

      for (let j = 0; j < topicsObjects.length; j++) {
        const topicObject = topicsObjects[j];
        const { viewStatus, cardViewStatus } = topicObject;
        const { firstViewed, secondViewed, thirdViewed, fourthViewed } =
          cardViewStatus;

        let count = null;

        // Determine the count of cards based on viewStatus
        switch (viewStatus) {
          case 1:
            count = firstViewed.length;
            break;
          case 2:
            count = secondViewed.length;
            break;
          case 3:
            count = thirdViewed.length;
            break;
          case 4:
            count = fourthViewed.length;
            break;
          default:
            count = 0;
            break;
        }

        const topicNumber = i === 0 ? "" : `+${i}`;

        // Save the result in the counts object with keys n1, n2, etc.
        counts[`n${topicNumber}`] = count;
      }
    }

    return counts;
  } catch (e) {
    console.error("Error getting cards count by topics", e);
    throw new Error("Error getting cards count by topics", e);
  }
}

module.exports = getCardsCountByTopics;
