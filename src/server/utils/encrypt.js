import crypto from "crypto";

function encrypt(text) {
  const cipher = crypto.createCipher("aes-256-cbc", process.env.ENCRYPT_KEY);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

export { encrypt };
