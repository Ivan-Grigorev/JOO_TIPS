const crypto = require("crypto");

// Function to generate a secret key of specified length in bits
function generateSecretKey(length = 128) {
  // Generate random bytes and convert them to a hexadecimal string
  return crypto.randomBytes(length / 8).toString("hex");
}

// Generate a secret key for encryption
const ENCRYPT_KEY = generateSecretKey();

// Display the generated encryption key
console.log(ENCRYPT_KEY);

// Display the length of the encryption key
console.log(`ENCRYPT_KEY length = ${ENCRYPT_KEY.length}`);
