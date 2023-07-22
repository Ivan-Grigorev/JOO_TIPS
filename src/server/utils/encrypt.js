const crypto = require("crypto");

function encrypt(text) {
  try {
    const IV_LENGTH = 16; // Для AES это всегда 16 байтов
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(
      "aes-256-cbc",
      process.env.ENCRYPT_KEY,
      iv
    );
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return iv.toString("hex") + encrypted;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

module.exports = { encrypt };
