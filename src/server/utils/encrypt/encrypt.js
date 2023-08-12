const crypto = require("crypto");

// Function to encrypt a given text using AES-256-CBC encryption
function encrypt(text) {
  try {
    const IV_LENGTH = 16; // IV length is always 16 bytes for AES
    const iv = crypto.randomBytes(IV_LENGTH); // Generate a random initialization vector
    const cipher = crypto.createCipheriv(
      "aes-256-cbc",
      process.env.ENCRYPT_KEY, // Encryption key from environment variables
      iv
    );
    let encrypted = cipher.update(text, "utf8", "hex"); // Update the cipher with the plaintext
    encrypted += cipher.final("hex"); // Finalize the cipher and get the encrypted data
    return iv.toString("hex") + encrypted; // Combine IV and encrypted data and return
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// Export the encrypt function for use in other modules
module.exports = { encrypt };
