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

  // Создание нового Excel-файла и листа
  const workbook = new excel.Workbook();
  const sheet = workbook.addWorksheet("Sheet1");

  console.log(rows[0]);
  // rows.forEach((row) => {
  //   const column1Value = row[0];

  //   // Заполните данные в строке листа Excel
  // });
  // console.log(column1Value);
  // // Сохранение Excel-файла
  // await workbook.xlsx.writeFile("parsed_data.xlsx");

  // // Сохранение данных в MongoDB
  // rows.forEach(async (row) => {
  //   const newData = new DataModel({
  //     // Заполните поля данных на основе row
  //   });
  //   await newData.save();
  // });

  // console.log("Data parsed and saved.");
}

// Вызов функции для разбора данных
parseAndSaveData();
