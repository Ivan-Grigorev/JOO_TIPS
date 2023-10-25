const Lesson = require("../../models/lessons/lessons");
const User = require("../../models/user/user");
const moment = require("moment");
const getUserLanguagesInfo = require("../../utils/lessons/getUserLanguagesInfo");
const getViewedPercent = require("../../utils/lessons/getViewedPercent/getViewedPercent");
const findTopicStatus = require("../../utils/lessons/findTopicStatus");
const isCardAlreadyExists = require("../../utils/lessons/isCardAlreadyExists");
const moveCardToNextArray = require("../../utils/lessons/moveCardToNextArray");
require("colors");

// This function calculates the sum of points for lessons associated with the user.
// todo переименовать в getActiveLessonPoints
async function getActiveLessonPoints(req, res) {
  try {
    // Check if there is an authenticated user, return error if not.
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Authentication required." });
    }

    // Find the user by ID
    const user = await User.findById(req.user.id);

    // Get the active language from the user's data
    const activeLanguage = user.activeLanguage;

    // Access the points for the active language from languagesPoints object
    const points = user.languagesPoints.get(activeLanguage);

    // Respond with the total points, defaulting to 0 if not found.
    res.json(points);
  } catch (error) {
    // Log the error and send a 500 Internal Server Error response.
    console.error("Error fetching user points:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// This function retrieves lessons associated with the user.
async function getLessons(req, res) {
  try {
    const userId = req.user.id;

    // Find lessons linked to the specified userId.
    const lessons = await Lesson.find({ userId });

    // Respond with the retrieved lessons.
    res.json(lessons);
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response.
    res.status(500).json({ error: "Server error" });
  }
}

async function addPoints(req, res) {
  try {
    const { language, points } = req.lesson;
    const user = await User.findByIdAndUpdate(req.user.id, {
      $inc: { [`languagesPoints.${language}`]: points },
    });

    res.status(201).json({ points: user.languagesPoints[language] });
  } catch (e) {
    console.error(`Error adding points: ${e}`);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function startLesson(req, res, next) {
  try {
    req.lesson.startTime = moment().format("DD.MM.YYYY HH:mm");
    req.lesson.save();

    res.status(201).end();
  } catch (e) {
    console.error(`Error starting Lesson: ${e}`.red);
  }
}

async function finishLesson(req, res, next) {
  try {
    req.lesson.status = "completed";
    // req.lesson.cards.forEach((card) => (card.viewIndex += 1)); // increase cards view index
    req.lesson.endTime = moment().format("DD.MM.YYYY HH:mm");
    req.lesson.save();

    next();
  } catch (error) {
    // Handle errors if any occurred during the process
    console.error("Error finishing lesson:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

/**
 * Add a card to one of the topic statuses arrays, update topic status, and view percentage.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} JSON response containing the updated card view status.
 */
async function addCardToViewed(req, res) {
  try {
    const { cardTopic, cardId } = req.body;
    const userId = req.user.id;

    const cardDataToPush = {
      cardRef: cardId,
      cardTopicRef: cardTopic,
    };

    const user = await User.findById(userId);
    const userLanguageInfo = await getUserLanguagesInfo(user);
    const { userLanguageObject } = userLanguageInfo;

    const topicStatusObject = findTopicStatus(userLanguageObject, cardTopic);

    if (!topicStatusObject) {
      console.log("Topic status object not found".red);
      return res.status(404).json({ message: "Topic status object not found" });
    }
    const { cardViewStatus } = topicStatusObject;

    let cardExistsInSomeView = false;

    for (const viewNumber in cardViewStatus) {
      // skip mongoDB prototype properties
      if (!cardViewStatus.hasOwnProperty(viewNumber)) continue;

      const currentStatusArray = cardViewStatus[viewNumber];
      const cardExists = isCardAlreadyExists(currentStatusArray, cardId);

      if (cardExists) {
        cardExistsInSomeView = true;
        const cardIndex = Object.keys(cardViewStatus).indexOf(viewNumber);
        const notLastArray = cardIndex < Object.keys(cardViewStatus).length - 1;

        if (notLastArray) {
          moveCardToNextArray(cardViewStatus, viewNumber, cardIndex, cardId);

          break;
        }
      }
    }

    if (!cardExistsInSomeView) {
      console.log("Adding the card to the firstViewed array.".yellow);
      cardViewStatus.firstViewed.push(cardDataToPush);
    }

    // Logic for adding bills
    // Logic for adding bills
    // Logic for adding bills

    await user.save();

    res.status(201).json(cardViewStatus);
  } catch (e) {
    console.error(`Error adding card to viewed cards array: ${e}`.red);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getActiveLessonPoints,
  getLessons,
  finishLesson,
  addPoints,
  startLesson,
  addCardToViewed,
};
