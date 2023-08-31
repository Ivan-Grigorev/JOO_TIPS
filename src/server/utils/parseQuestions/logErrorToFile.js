const fs = require("fs");
const path = require("path");

const errorLogsDir = path.join(__dirname, "errorLogs");

// Создаем директорию для логов ошибок, если еще не создана
const directoryIsNotExist = !fs.existsSync(errorLogsDir);
const createDirectory = fs.mkdirSync(errorLogsDir);

if (directoryIsNotExist) createDirectory();

// Функция для записи ошибки в файл
function logErrorToFile(range, error) {
  const errorFileName = `${range}.error.log`;
  const errorFilePath = path.join(errorLogsDir, errorFileName);

  fs.appendFile(errorFilePath, `${error}\n`, (err) => {
    if (err) {
      console.error("Не удалось записать ошибку в файл:", err);
    }
  });
}

module.exports = logErrorToFile;
