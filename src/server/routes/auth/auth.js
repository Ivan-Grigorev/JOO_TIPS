const express = require("express");
const auth = require("../../controllers/auth/auth.js");
const middlewares = require("../../middlewares/auth.js");

const joiUser = require("../../models/user/user-joi.js");
const profileRoutes = require("./profile.js");
const subscriptionRoutes = require("./subscription.js");
const recoverRoutes = require("./recover.js");

const router = express.Router();

router.use(profileRoutes); // ADDRESS/users + /profile ...
router.use(subscriptionRoutes); // ADDRESS/users + /subscription ...
router.use(recoverRoutes); // ADDRESS/users + /recover ...

router.post(
  "/signup",
  joiUser.userJoi,
  middlewares.isEmailInUse,
  middlewares.isPasswordsMatch,
  middlewares.setUserDevice,
  auth.signup
);

router.post(
  "/login",
  joiUser.userJoi,
  middlewares.isUserExist,
  middlewares.setUserDevice,
  middlewares.updateLastIP,
  auth.login
);

router.post(
  "/logout",
  joiUser.userJoi,
  middlewares.auth,
  middlewares.setUserDevice,
  auth.logout
);

module.exports = router;
