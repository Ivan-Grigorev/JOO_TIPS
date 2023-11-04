const { google } = require("googleapis");
const sheets = google.sheets("v4");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const serviceAccPath = path.join(__dirname, "credentials.json");
const PRIVATE_KEY = require(serviceAccPath);
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const client = new google.auth.JWT(
  PRIVATE_KEY.client_email,
  null,
  PRIVATE_KEY.private_key,
  SCOPES
);

// Function to write data to a Google Sheets spreadsheet
async function writeToSheet(data) {
  try {
    await client.authorize();

    const sheetsApi = google.sheets({ version: "v4", auth: client });
    const sheetID = process.env.GOOGLE_SHEET_ID;

    // Append the data to the specified range in the spreadsheet
    await sheetsApi.spreadsheets.values.append({
      spreadsheetId: sheetID,
      range: "'JooTips-Metrics'!A2", // Example range for appending data starting from cell A2
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: data, // `data` should be a two-dimensional array
      },
    });

    // Apply cell styles to the appended data
    await applyStylesToSheet();
  } catch (error) {
    console.error(`Error while writing to google sheet: ${error}`);
  }
}

// Function to apply cell styles to the sheet
async function applyStylesToSheet() {
  try {
    const sheetsApi = google.sheets({ version: "v4", auth: client });
    const sheetID = process.env.GOOGLE_SHEET_ID;

    // Apply styling to specific cells using a batch update request
    await sheetsApi.spreadsheets.batchUpdate({
      spreadsheetId: sheetID,
      resource: {
        requests: [
          {
            repeatCell: {
              range: {
                sheetId: 0, // Sheet number (usually 0 for the first sheet)
                startRowIndex: 0, // Starting row index
                startColumnIndex: 1, // Starting column index
                endColumnIndex: 2, // Ending column index
              },
              cell: {
                userEnteredFormat: {
                  horizontalAlignment: "CENTER", // Apply horizontal center alignment
                },
              },
              fields: "userEnteredFormat(horizontalAlignment)",
            },
          },
        ],
      },
    });
  } catch (error) {
    console.error(`Error while applying cell styles: ${error}`);
  }
}

module.exports = writeToSheet;
