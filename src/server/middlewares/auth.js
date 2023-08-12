const User = require("../models/user/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const parser = require("ua-parser-js");
require("colors");

async function auth(req, res, next) {
  try {
    const authHeader = req.headers.authorization; // Get the 'Authorization' header from the request

    if (!authHeader) return res.status(401).json({ message: "Not authorized" }); // If no authorization header, return unauthorized status

    const [bearer, token] = authHeader.split(" ", 2); // Split the header value into 'Bearer' and the actual token
    const noBearer = bearer !== "Bearer"; // Check if the authorization type is 'Bearer'

    if (noBearer) return res.status(401).json({ message: "Not authorized" }); // If not 'Bearer', return unauthorized status

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) return res.status(401).json({ message: "Invalid token" }); // If the token is invalid, return unauthorized status

      const currentUser = await User.findById(decoded.id); // Find the user in the database based on the decoded token ID

      if (currentUser && currentUser.token === token) {
        // If user exists and the token matches the stored token
        req.user = decoded; // Attach the decoded user information to the request object
        return next(); // Proceed to the next middleware
      }

      return res.status(401).json({ message: "Not authorized" }); // If user doesn't match or token doesn't match, return unauthorized status
    });
  } catch (error) {
    console.error(`Auth error: ${error}`.red); // Log any errors that occur during the authentication process
    return res.status(500).json({ message: "Internal server error" }); // Return internal server error status
  }
}

async function updateLastIP(req, res, next) {
  try {
    const lastUserIP =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress; // Get the user's IP address from headers or remote socket
    const cloudFlareProxiUserIP =
      req.headers["cf-connecting-ip"] || req.connection.remoteAddress; // Get the user's IP address from Cloudflare headers or connection
    req.user.IP.lastUserIP = lastUserIP || cloudFlareProxiUserIP; // Update the lastUserIP property with the obtained IP address

    console.log(`req.user.IP.lastUserIP = = = > ${req.user.IP.lastUserIP}`); // Log the updated lastUserIP for debugging or tracking purposes
    next(); // Proceed to the next middleware
  } catch (error) {
    console.error(`Error while middleware updateLastIP: ${error}`.red); // Log any errors that occur during the middleware execution
    return res.status(500).json({ message: "Internal server error" }); // Return internal server error status
  }
}

async function isEmailInUse(req, res, next) {
  try {
    const { name, email, password, confirmedPassword } = req.body; // Extract relevant fields from the request body
    const user = await User.findOne({ email }); // Find a user with the provided email
    const body = { name, email, password }; // Create an object with relevant fields
    req.user = Object.assign({}, body); // Assign the object to req.user

    if (user !== null) return res.status(409).json({ message: "Email in use" }); // If a user with the email exists, send a conflict status response

    next(); // If no user with the email exists, proceed to the next middleware
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" }); // Handle any errors that occur during the process
  }
}

async function isUserExist(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email }); // Find a user with the provided email

    // Use status 401 to avoid revealing user existence in the response
    if (user === null)
      return res.status(401).json({ message: "Email or password is wrong." });

    req.user = user; // Store the user object in the request body for later use

    next(); // Proceed to the next middleware
  } catch (error) {
    console.error(`${error}`.red); // Log any errors that occur
    return res.status(500).json({ message: "Internal server error" }); // Handle internal server errors
  }
}
// Middleware for resetting password: Check if a user with the provided email exists
async function IsUserExistByEmail(req, res, next) {
  try {
    const email = req.body.email;

    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    req.user = user; // Store the user object in the request

    next(); // Proceed to the next middleware
  } catch (error) {
    console.error(
      `Error while trying to IsUserExxistByEmail: ${error.message}`
    );
  }
}

// Middleware for user signup: Check if the provided passwords match
async function isPasswordsMatch(req, res, next) {
  try {
    const { password } = req.body;
    const { confirmedPassword } = req.body;

    const match = password === confirmedPassword;

    if (!match)
      return res.status(400).json({ message: "Passwords must match" });

    next(); // Proceed to the next middleware
  } catch (error) {
    console.error(`Error while checking passwords: ${error.message}`);

    return res
      .status(500)
      .json({ message: `Middleware password matching error: ${error}` });
  }
}

// Middleware for password change: Check if the provided current password matches the DB password
async function isCurrentPasswordRight(req, res, next) {
  try {
    const { currentPassword } = req.body;

    const { id } = req.user;
    const user = await User.findById(id); // Retrieve user information

    bcrypt.compare(currentPassword, user.password, async (err, result) => {
      if (err) return next(err);

      if (result === false)
        return res.status(401).json({ message: "Password is wrong." });

      next(); // Proceed to the next middleware
    });
  } catch (error) {
    console.log(`Error in isCurrentPasswordRight - ${error.message}`.red);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Middleware for user deletion: Check if the provided password matches the user's password
async function confirmPassword(req, res, next) {
  try {
    const password = req.body.password;
    const email = req.body.email;

    const user = await User.findOne({ email });

    bcrypt.compare(password, user.password, async (err, result) => {
      if (err)
        return res.status(500).json({ message: "Error comparing passwords" });

      if (result === false)
        return res.status(401).json({ message: "Password is wrong." });

      next(); // Proceed to the next middleware
    });
  } catch (error) {
    console.error(`Error comparing passwords: ${error.message}`.yellow);
    res.status(500).json({ message: "Internal server error." });
  }
}

// Middleware for setting user device information
async function setUserDevice(req, res, next) {
  try {
    const ua = parser(req.headers["user-agent"] || ""); // Parse the user-agent header
    const deviceInfo = {
      browser: ua.browser.name || "Unknown",
      os: ua.os.name || "Unknown",
      device: ua.device.model || "Unknown",
    };

    req.user.deviceInfo = deviceInfo; // Store the device information in the request object

    next(); // Proceed to the next middleware
  } catch (error) {
    res.status(500).json({ message: `Error updating user device: ${error}` });
  }
}

module.exports = {
  auth,
  isEmailInUse,
  isUserExist,
  updateLastIP,
  isPasswordsMatch,
  setUserDevice,
  confirmPassword,
  IsUserExistByEmail,
  isCurrentPasswordRight,
};
