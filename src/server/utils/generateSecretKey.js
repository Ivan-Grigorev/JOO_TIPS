const crypto = require("crypto");
function generateSecretKey(length = 256) {
  return crypto.randomBytes(length / 8).toString("hex"); // Генерируем случайные байты и преобразуем их в строку формата hex
}

const ENCRYPT_KEY = generateSecretKey();
