const { google } = require("googleapis");
const creds = require("./сredentials.json"); // Загрузка учетных данных Google API из файла credentials.json
const Card = require("../../models/Card/Card");
const { Question } = require("../../models/Question/question");
const mongoDB = require("../../db");
require("colors");

const client = new google.auth.JWT(
  creds.client_email,
  null,
  creds.private_key,
  ["https://www.googleapis.com/auth/spreadsheets.readonly"]
);

// ID Google Docs файла
const fileId = "1LhUzn8PornnA2KrbuYgUxD4WvVkNowfxOQ-21NGlMIQ";

// Асинхронная функция для получения данных из Google Docs
async function getDataFromGoogleDocs() {
  const sheets = google.sheets("v4");

  // Получение информации о листе
  const response = await sheets.spreadsheets.get({
    auth: client,
    spreadsheetId: fileId,
  });
  const sheetId = response.data.sheets[0].properties.sheetId;

  // Получение данных из листа
  const res = await sheets.spreadsheets.values.get({
    auth: client,
    spreadsheetId: fileId,
    range: `1-100`, // Имя листа
  });

  const rows = res.data.values;
  return rows;
}

// Асинхронная функция для разбора данных и сохранения в Excel и MongoDB
async function parseAndSaveData() {
  const rows = await getDataFromGoogleDocs(); // получили данные

  await mongoDB(); // подключились к базе данных

  console.log(`rows.length - - - > ${rows.length}`.red);

  // Пропускаем первую строку, так как это заголовки
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];

    console.log(`Ячейка № ${i}`.green);

    // Извлечение данных
    const language = row[0];
    const topic = row[1];
    const text = row[2];
    const example = row[3];
    const questionText = row[4];

    const answer = row[5].split(" ");
    const answerDifficult = (answer[0].match(/\[(.*?)\]/) || [])[1].toLowerCase() || answer[0].toLowerCase(); // prettier-ignore
    const isCorrect = answer[1] === "[CORRECT]";
    const optionText = answer.splice(2).join(" ");

    // //* Создание новой карты
    if (language) {
      const card = new Card({
        language,
        topic,
        text,
        example,
      });

      //* Создание нового вопроса
      var question = new Question({
        questionText,
        cardId: card._id, // Привязываем вопрос к карте по ID
        difficultyLevels: {
          easy: [],
          medium: [],
          hard: [],
        },
      });

      card.qas.push(question._id); // привязываю вопрос к карточке
      await card.save(); // ? Сохранение карты
      await question.save(); // ? Сохранение вопроса
    }

    //* Создание опции
    var option = { text: optionText, isCorrect };

    if (answerDifficult === "easy") {
      // console.log("answerDifficult = easy");
      await Question.findByIdAndUpdate(
        question._id,
        { $push: { "difficultyLevels.easy": option } },
        { new: true }
      );

      // await Question.save(); // ? сохранение опции
    } else if (answerDifficult === "medium") {
      // console.log("answerDifficult = medium");
      await Question.findByIdAndUpdate(question._id, {
        $push: { "difficultyLevels.medium": option },
      });

      // await Question.save(); // ? сохранение опции
    } else if (answerDifficult === "difficult") {
      // console.log("answerDifficult = difficult");
      await Question.findByIdAndUpdate(
        question._id,
        { $push: { "difficultyLevels.hard": option } },
        { new: true }
      );

      // await Question.save(); // ? сохранение опции
    } else {
      console.log(
        "answerDifficult doesn't equal easy, medium or difficult".red
      );
      console.log(`answerDifficult - - - > ${answerDifficult}`.red);
      throw new Error("answerDifficult doesn't equal easy or medium");
    }
  }

  console.log("Data parsed and saved.".green);
  console.log("Disconnected from the DB".yellow);
  process.exit(1); // Exit the application with a non-zero status code
}

// Вызов функции для разбора данных
parseAndSaveData();
