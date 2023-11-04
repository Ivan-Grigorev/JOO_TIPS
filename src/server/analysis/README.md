# Analysis

This folder contains code for analytics and reporting.

## Files

**googleSheet.js**

Functions for writing data to Google Sheets:

- `writeToSheet()` - writes data to specified sheet range
- `applyStylesToSheet()` - applies styles to sheet cells

Uses Google Sheets API.

**index.js**

- Calculates various metrics based on user data from MongoDB:
  - Total user count
  - Users by subscription types
  - Top country by user count
  - List of countries in the past week
- Calculates growth percentage of metrics compared to previous month
- Sends email report with results
- Writes data to Google Sheet via `googleSheet.js`

Uses MongoDB aggregations, Nodemailer for email, and Google Sheets API.

Runs periodically via `setInterval()` to generate reports.

**credentials.json**

Contains service account credentials for accessing Google Sheets API.

## Usage

These files are used for:

- Generating analytics reports based on user data
- Sending email with statistics and metrics
- Saving results to Google Sheet
- Monitoring key metrics trends of the project

The data is used for business analytics and decision making.
