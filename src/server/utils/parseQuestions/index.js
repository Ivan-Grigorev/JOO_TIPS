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

  // Создание объекта для хранения заголовков и соответствующих индексов столбцов
  const headers = {
    language: 0,
    topic: 1,
    text: 2,
    example: 3,
    qas: 4,
    answers: 5,
    difficultyLevels: 6,
    optionText: 7,
    isCorrect: 8,
  };

  // Пропускаем первую строку, так как это заголовки
  for (
    let i = 1;
    i < 10;
    // rows.length;
    i++
  ) {
    const row = rows[i];

    // Извлечение данных
    const language = row[headers.language];
    const topic = row[headers.topic];
    const text = row[headers.text];
    const example = row[headers.example];
    const questionText = row[headers.qas];
    const answersParts = row[headers.answers].split(" ");
    const answerDifficult = answersParts[0].substring(1, answersParts[0].length - 1).toLowerCase(); // prettier-ignore
    const optionText = answersParts.slice(2).join(" ");
    const isCorrect = row[headers.isCorrect] === "CORRECT";

    const noContent = !language; //если нет языка - значит нет и остального кроме ответов

    if (language) {
      //* Создание новой карты
      var card = new Card({
        language,
        topic,
        text,
        example,
      });
    }
    if (noContent && !row[headers.answers]) continue;

    if (noContent && row[headers.answers]) {
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

      //* Создание нового варианта ответа и добавление в соответствующий уровень сложности
      var option = new QuestionOption({
        text: optionText,
        isCorrect,
      });

      console.log(`question.difficultyLevels[answerDifficult] - ${question.difficultyLevels[answerDifficult]}`.blue); // prettier-ignore
      console.log(`answerDifficult - ${answerDifficult}`.green);

      // добавляем опцию в сложности урока
      if (question.difficultyLevels[answerDifficult]) question.difficultyLevels[answerDifficult].push(option); // prettier-ignore
      card.qas.push(question._id); // привязываю вопрос к карточке

      await option.save();
      await question.save(); // ? Сохранение вопроса
      await card.save(); // ? Сохранение карты
    }
  }

  console.log("Data parsed and saved.".green);
  console.log("Disconnected from the DB".yellow);
  process.exit(1); // Exit the application with a non-zero status code
}

// Вызов функции для разбора данных
parseAndSaveData();
