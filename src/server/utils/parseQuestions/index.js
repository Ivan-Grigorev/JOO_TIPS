const { google } = require("googleapis");
const creds = require("./сredentials.json"); // Загрузка учетных данных Google API из файла credentials.json
const Card = require("../../models/Card/Card");
const { Question, QuestionOption } = require("../../models/Question/question");
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

  // Пропускаем первую строку, так как это заголовки
  const indexRange = 10; // в будущем rows.length
  for (let i = 1; i < indexRange; i++) {
    const row = rows[i];

    // Извлечение данных
    const language = row[0];
    const topic = row[1];
    const text = row[2];
    const example = row[3];
    const questionText = row[4];

    const answer = row[5].split(" ");
    const answerDifficult = answer[0];
    const isCorrect = answer[1];
    const optionText = answer[2];

    const noContent = !language; //если нет языка - значит нет и остального кроме ответов

    // //* Создание новой карты
    // const card = new Card({
    //   language,
    //   topic,
    //   text,
    //   example,
    // });

    // if (noContent && answer) {
    //   var question = new Question({
    //     questionText,
    //     cardId: card._id, // Привязываем вопрос к карте по ID
    //     difficultyLevels: {
    //       easy: [],
    //       medium: [],
    //       hard: [],
    //     },
    //   }); //* Создание нового вопроса
    //   card.qas.push(question._id); // привязываю вопрос к карточке

    //   for (let i = 1; i <= 10; i++) {
    //     //* Создание нового варианта ответа и добавление в соответствующий уровень сложности
    //     var option = new QuestionOption({
    //       text: optionText,
    //       isCorrect,
    //     });
    //     console.log(`option - ${option}`);
    //     question.difficultyLevels[answerDifficult].push(option); // prettier-ignore
    //     await option.save(); // ? сохранение опции
    //   }

    //   // добавляем опцию в сложности урока

    //   await question.save(); // ? Сохранение вопроса
    //   await card.save(); // ? Сохранение карты
    // }

    // if (noContent && !answer) continue;

    // console.log(`question - - -${question}`);
  }

  console.log("Data parsed and saved.".green);
  console.log("Disconnected from the DB".yellow);
  process.exit(1); // Exit the application with a non-zero status code
}

// Вызов функции для разбора данных
parseAndSaveData();
