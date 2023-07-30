const https = require("https");
const fs = require("fs");
const app = require("../../app");
const path = require("path");

// Задаем пути относительно текущего файла
const sslCertificatePath = path.join(__dirname, "ssl_certificate.crt");
const sslPrivateKeyPath = path.join(__dirname, "ssl_private.key");

const sslCertificate = fs.readFileSync(sslCertificatePath, "utf8");
const sslPrivateKey = fs.readFileSync(sslPrivateKeyPath, "utf8");

const options = {
  key: sslPrivateKey,
  cert: sslCertificate,
};

const server = https.createServer(options, app);

module.exports = server;
