const express = require("express");
const router = express.Router();
const language = require("../../controllers/languages/languages.js");
const middlewares = require("../../middlewares/auth.js");
const {
  userLanguage: joiValidation,
} = require("../../models/user/user-joi.js");

const languagesMiddlewares = require("../../middlewares/languages.js");

router.get("/", middlewares.auth, language.get);

router.post(
  "/add",
  joiValidation,
  middlewares.auth,
  languagesMiddlewares.isUniqueLanguage,
  language.add
);

module.exports = router;
