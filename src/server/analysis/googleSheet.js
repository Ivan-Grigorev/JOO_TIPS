const { google } = require("googleapis");
const sheets = google.sheets("v4");
const fs = require("fs");
const path = require("path");

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
    const sheetID = "1dqmPmCi1W01I3W99A76mrWM9klvS7D4u2Lg4Qkb4GDc";

    // Замените `spreadsheetId` и `range` на ваши значения.
    await sheetsApi.spreadsheets.values.append({
      spreadsheetId: sheetID,
      range: "Лист1!A1", // Например, запись начнется с первой ячейки листа Sheet1
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: data, // `data` должен быть двумерным массивом
      },
    });
  } catch (error) {
    console.error(`Error while writing to google sheet: ${error}`);
  }
}
const writableData = [
  ["Usertype", "Premium", "Country-code"],
  ["School", "true", "UA"],
];
writeToSheet(writableData);
module.exports = writeToSheet;
