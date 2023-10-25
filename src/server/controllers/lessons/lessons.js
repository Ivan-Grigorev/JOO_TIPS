const Lesson = require("../../models/lessons/lessons");
const User = require("../../models/user/user");
const moment = require("moment");
const getUserLanguagesInfo = require("../../utils/lessons/getUserLanguagesInfo");
const getViewedPercent = require("../../utils/lessons/getViewedPercent/getViewedPercent");
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

async function addCardToViewed(req, res) {
  try {
    // const { card } = req.body;
    const card = {
      cardTopic: "651c7e2e562ef973f78a78b9",
      cardId: "64f3a3df738642b697b70cdc",
    };

    const user = await User.findById(req.user.id);

    // Get information about the user's languages and active topics
    const userLanguageInfo = await getUserLanguagesInfo(user);
    const { userLanguageObject, activeTopicsTitles } = userLanguageInfo;

    // Calculate the viewed card percentages for active topics
    const getViewedPercentage = await getViewedPercent(userLanguageInfo); // высчитывать процент только после добавления темы

    // Найдем нужный объект в массиве topicStatuses
    const topicStatusObject = userLanguageObject.topicStatuses.find(
      (topic) => topic.ref.toString() === card.cardTopic.toString()
    );

    if (!topicStatusObject) {
      console.log("Topic status object not found".red);
      return res.status(404).jspn({ message: "Topic status object not found" });
    }
    const { cardViewStatus, viewStatus, viewPercentage } = topicStatusObject;

    /*
    todo После добавления карточки нужно сделать перерасчёт процентов и...
    todo ...определить viewStatus темы (если +75% - то статус ++)
    */

    const cardDataToPush = {
      cardRef: card.cardId,
      cardTopicRef: card.cardTopic,
    };

    for (const viewNumber in cardViewStatus) {
      if (cardViewStatus.hasOwnProperty(viewNumber)) {
        const cardExists = cardViewStatus[viewNumber].some(
          (obj) => obj.cardRef.toString() === cardDataToPush.cardRef
        );

        if (cardExists) {
          const index = Object.keys(cardViewStatus).indexOf(viewNumber);
          console.log("index,index", index);
          if (index < Object.keys(cardViewStatus).length - 1) {
            const nextView = Object.keys(cardViewStatus)[index + 1];
            // Выводим в консоль информацию о добавлении карточки в следующий массив
            console.log(`Добавление карточки в массив ${nextView}:`,cardDataToPush); // prettier-ignore
            cardViewStatus[nextView].push(cardDataToPush);

            break;
          }
        }

        const cardIsUniqueInArray = !cardViewStatus.firstViewed.some(
          (obj) => obj.cardRef.toString() === cardDataToPush.cardRef
        );

        if (cardIsUniqueInArray) {
          console.log(`Добавление карточки в массив firstViewed: ${cardDataToPush}`.yellow); // prettier-ignore
          cardViewStatus.firstViewed.push(cardDataToPush);
          break;
        }
      }
    }

    // logic bills adding
    // logic bills adding
    // logic bills adding

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
