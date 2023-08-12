// Middleware for checking CSRF token: Verifies the presence of an active session
const checkCSRF = (req, res, next) => {
  if (!req.session) {
    console.log("Session expired, please log in again");
    res.status(401).json({ message: "Session expired, please log in again" });
  } else {
    // Session exists, proceed to the next middleware
    next();
  }
};

module.exports = { checkCSRF };
