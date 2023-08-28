const fs = require("fs");
const path = require("path");

const errorFilePath = path.join(__dirname, "error.log");

// Функция для записи ошибки в файл
function logErrorToFile(error) {
  fs.appendFile(errorFilePath, `${error}\n`, (err) => {
    if (err) {
      console.error("Не удалось записать ошибку в файл:", err);
    }
  });
}

module.exports = logErrorToFile;
