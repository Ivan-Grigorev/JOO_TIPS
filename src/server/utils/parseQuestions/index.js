const fs = require("fs");
const { google } = require("googleapis");
const excel = require("exceljs");

// Загрузка учетных данных Google API из файла credentials.json
const creds = require("./сredentials.json");
const Card = require("../../models/Card/Card");
const Question = require("../../models/question/question");

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
  const rows = await getDataFromGoogleDocs();

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
  // Создание объекта для хранения временных данных по картам
  const cardData = {};

  // Пропускаем первую строку, так как это заголовки
  for (
    let i = 1;
    i < 9;
    // rows.length;
    i++
  ) {
    const row = rows[i];

    // Извлечение данных из соответствующих столбцов на основе индексов из headers
    const language = row[headers.language];
    const topic = row[headers.topic];
    const text = row[headers.text];
    const example = row[headers.example];
    const answersParts = row[headers.answers].split(" ");
    const difficultyLevels = answersParts[0].substring(1, answersParts[0].length - 1); // prettier-ignore
    const isCorrect = answersParts[1].substring(1, answersParts[1].length - 1);
    const optionText = answersParts.slice(2).join(" ");
    // Теперь у вас есть difficultyLevels, isCorrect и optionText для каждой строки

    console.log(`difficultyLevels - ${difficultyLevels}`);
    console.log(`isCorrect - ${isCorrect}`);
    console.log(`optionText - ${optionText}`);


    // const cardKey = `${language}-${topic}-${text}`;
    // if (!cardData[cardKey]) {
    //   cardData[cardKey] = {
    //     language,
    //     topic,
    //     text,
    //     example,
    //     qas: [],
    //   };
    // }

    // // Создание варианта ответа
    // const option = {
    //   text: optionText,
    //   isCorrect,
    // };

    // // Добавление варианта ответа в соответствующий уровень сложности
    // const question = cardData[cardKey].qas.find(
    //   (qa) => qa.questionText === questionText
    // );
    // if (question) {
    //   question.difficultyLevels.medium.push(option); // Выберите сложность по вашему усмотрению
    // } else {
    //   cardData[cardKey].qas.push({
    //     questionText,
    //     difficultyLevels: {
    //       easy: [],
    //       medium: [option], // Выберите сложность по вашему усмотрению
    //       hard: [],
    //     },
    //   });
    // }
  }

  // // Сохранение данных в базе данных
  // for (const cardKey in cardData) {
  //   const cardInfo = cardData[cardKey];

  //   // Создание новой карты и сохранение в MongoDB
  //   const card = new Card(cardInfo);
  //   await card.save();
  // }

  console.log("Data parsed and saved.");
}

// Вызов функции для разбора данных
parseAndSaveData();
