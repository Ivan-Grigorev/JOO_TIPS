const { google } = require("googleapis");
const sheets = google.sheets("v4");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const serviceAccPath = path.join(__dirname, "jootips-923e9874e02e.json");
const PRIVATE_KEY = require(serviceAccPath); // Укажите путь к вашему JSON файлу
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const client = new google.auth.JWT(
  PRIVATE_KEY.client_email,
  null,
  PRIVATE_KEY.private_key,
  SCOPES
);

async function writeToSheet(data) {
  try {
    await client.authorize();

    const sheetsApi = google.sheets({ version: "v4", auth: client });
    const sheetID = process.env.GOOGLE_SHEET_ID;

    // Замените `spreadsheetId` и `range` на ваши значения.
    await sheetsApi.spreadsheets.values.append({
      spreadsheetId: sheetID,
      range: "'JooTips-Metrics'!A2", // Например, запись начнется с первой ячейки листа Sheet1
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: data, // `data` должен быть двумерным массивом
      },
    });
    applyStylesToSheet()
  } catch (error) {
    console.error(`Error while writing to google sheet: ${error}`);
  }
}

async function applyStylesToSheet() {
  const sheetsApi = google.sheets({ version: "v4", auth: client });
  const sheetID = process.env.GOOGLE_SHEET_ID;

  await sheetsApi.spreadsheets.batchUpdate({
    spreadsheetId: sheetID,
    resource: {
      requests: [
        {
          repeatCell: {
            range: {
              sheetId: 0, // Номер листа, обычно 0 для первого листа
              startRowIndex: 0, // начало диапазона
            //   endRowIndex: 10, // конец диапазона
              startColumnIndex: 1, // столбец для начала диапазона
              endColumnIndex: 2, // столбец для конца диапазона
            },
            cell: {
              userEnteredFormat: {
                horizontalAlignment: "CENTER", // выравнивание по центру
              },
            },
            fields: "userEnteredFormat(horizontalAlignment)",
          },
        },
      ],
    },
  });
}

module.exports = writeToSheet;
