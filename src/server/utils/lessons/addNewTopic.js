const getTopicsByLanguage = require("./getTechProps/utils/getTopicsByLanguage");
const moment = require("moment");
/**
 * Adds a new topic to the user's active topics list and updates topic statuses.
 *
 * @param {Object} user - The user object for which to add the new topic.
 * @param {Array} activeTopicsTitles - An array of titles of the user's active topics.
 * @param {string} currentDate - The current date in "DD.MM.YYYY" format.
 * @param {Array} activeTopicsRefs - An array containing references to the user's active topics.
 * @param {Array} topicStatuses - An array containing topic statuses for the user.
 * @param {function} next - The next middleware function to call after completing all of the operation.
 * @returns {Promise<void>} A promise that resolves after adding the new topic and updating the user.
 */
async function addNewTopic(
  user,
  activeTopicsTitles,
  activeTopicsRefs,
  topicStatuses
) {
  try {
    // Fetch the list of available topics for the user's active language
    const topicsList = await getTopicsByLanguage(user.activeLanguage);

    // Find the index of the current active topic in the topics list
    const targetIndex = topicsList.findIndex((topic) => {
      return (
        topic.topicTitle ===
        activeTopicsTitles[activeTopicsTitles.length - 1].title
      );
    });

    const nextIndex = targetIndex + 1;

    if (!topicsList[nextIndex]) {
      return console.log("No more topics available!".red);
    }

    // Deleting first topic from the active topics array
    if (activeTopicsRefs.length === 3) activeTopicsRefs.shift();

    // Create an object for the new topic to be added
    const topicToPush = {
      ref: topicsList[nextIndex]._id,
      activationDate: moment().format("DD.MM.YYYY"),
    };

    // Add the new topic to the user's active topics and topic statuses
    activeTopicsRefs.push(topicToPush);
    topicStatuses.push(topicToPush);

    // Save the user's changes
    user.save();

    console.log(
      `New topic was added right now - ${topicsList[nextIndex].topicTitle}`
        .yellow
    );
  } catch (e) {
    console.error("Error while adding a new topic".red, e);
  }
}

module.exports = addNewTopic;
