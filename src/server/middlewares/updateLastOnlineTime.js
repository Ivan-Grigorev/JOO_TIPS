const moment = require("moment");
const User = require("../models/user/user");

async function updateLastOnlineTime(req, res, next) {
  try {
    console.log(req.user);
    await User.findByIdAndUpdate(req.user.id, { lastOnline: moment() });

    res.status(201).end();
  } catch (e) {
    console.error("Error updating last online time".red, e);
    next(e);
  }
}

module.exports = updateLastOnlineTime;
