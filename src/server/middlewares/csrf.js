const checkCSRF = (req, res, next) => {
  if (!req.session) {
    console.log("Session expired, please log in again");
    res.status(401).json({ message: "Session expired, please log in again" });
  } else {
    // console.log("csrf is exist");
    next();
  }
};

module.exports = { checkCSRF };
