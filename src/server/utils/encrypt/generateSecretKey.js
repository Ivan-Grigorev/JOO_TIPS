const crypto = require("crypto");
function generateSecretKey(length = 128) {
  return crypto.randomBytes(length / 8).toString("hex"); // Генерируем случайные байты и преобразуем их в строку формата hex
}

const ENCRYPT_KEY = generateSecretKey();
console.log(ENCRYPT_KEY);
console.log(`ENCRYPT_KEY length = ${ENCRYPT_KEY.length}`);
