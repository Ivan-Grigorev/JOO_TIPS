// Importing Joi for data validation and colors for console output styling.
const Joi = require("joi");
require("colors");

// This middleware validates the data for user creation/update. It checks if data in request body is valid.
function userJoi(req, res, next) {
  // Define schema for validation.
  const userSchema = Joi.object({
    // Name must be a string between 4 to 20 characters.
    // Custom messages are defined for min and max rule violation.
    name: Joi.string().min(4).max(20).messages({
      "string.min": `Name should have a minimum length of {#limit}`,
      "string.max": `Name should have a maximum length of {#limit}`,
    }),
    // Email must be a valid email string.
    email: Joi.string().email().messages({
      "string.email": "Email must be a valid email",
    }),
    // Avatar must be a string with minimum length of 5.
    avatar: Joi.string().min(5).messages({
      "string.min": `Avatar should have a minimum length of {#limit}`,
    }),
    // Password must be a string.
    password: Joi.string().messages({
      "string.base": "Password must be a string",
    }),
    // Confirmed password must be a string.
    confirmedPassword: Joi.string().messages({
      "string.base": "Confirmed password must be a string",
    }),
    // Token must be a string.
    token: Joi.string().messages({
      "string.base": "Token must be a string",
    }),
  });

  // Validate request body against the schema.
  const { error } = userSchema.validate(req.body);

  // If there is validation error, print it to the console in red color and return a 400 response.
  if (error) {
    console.error(`Joi Error: ${error}`.red);
    return res.status(400).json({ message: error.message }).end();
  }

  // If validation passes, proceed to the next middleware.
  next();
}

// This middleware validates the data for user deletion. It checks if data in request body is valid.
function userDeleteJoi(req, res, next) {
  // Define schema for validation.
  const userDeleteSchema = Joi.object({
    // Email must be a valid email string and is required.
    email: Joi.string().email().required().messages({
      "string.email": "Email must be a valid email",
      "any.required": "Email is a required field",
    }),
    // Password must be a string and is required.
    password: Joi.string().required().messages({
      "string.base": "Password must be a string",
      "any.required": "Password is a required field",
    }),
  });

  // Validate request body against the schema.
  const { error } = userDeleteSchema.validate(req.body);

  // If there is validation error, print it to the console in red color and return a 400 response.
  if (error) {
    console.error(`Joi Error: ${error}`.red);
    return res.status(400).json({ message: error.message }).end();
  }

  // If validation passes, proceed to the next middleware.
  next();
}

// This middleware validates the data for user profile update. It checks if data in request body is valid.
function userUpdateProfile(req, res, next) {
  // Define schema for validation.
  const userUpdateProfile = Joi.object({
    phone: Joi.string()
      .regex(/^\d+$/)
      .min(5)
      .max(10)
      .allow("")
      .optional()
      .messages({
        "string.pattern.base": "The phoneNumber must only contain digits.",
        "string.min": `Phone number should have a minimum length of {#limit}`,
        "string.max": `Phone number should have a maximum length of {#limit}`,
      }),
    email: Joi.string().email().allow("").optional().messages({
      "string.email": "Email must be a valid email",
    }),
    profile: Joi.object({
      about: Joi.string().max(50).allow("").optional().messages({
        "string.max": `About section should have a maximum length of {#limit}`,
      }),
      username: Joi.string()
        .min(5)
        .max(10)
        .alphanum()
        .regex(/^[a-zA-Z0-9а-яА-Я]+$/)
        .allow("")
        .optional()
        .messages({
          "string.alphanum":
            "The username must only contain alphanumeric characters.",
          "string.pattern.base":
            "The username must only contain alphanumeric characters.",
          "string.min": `Username should have a minimum length of {#limit}`,
          "string.max": `Username should have a maximum length of {#limit}`,
        }),
      notifications: Joi.boolean().optional(),
      interfaceLanguage: Joi.string().optional().allow(""),
    })
      .optional()
      .or("about", "username", "notifications", "interfaceLanguage")
      .messages({
        "object.or": "At least one of {#peerNames} should be provided",
      }),
  })
    .or("phone", "email", "profile")
    .messages({
      "object.or": "At least one of {#peerNames} should be provided",
    });

  // Validate request body against the schema.
  const { error } = userUpdateProfile.validate(req.body);

  // If there is validation error, print it to the console in red color and return a 400 response.
  if (error) {
    console.error(`Joi Error: ${error}`.red);
    return res.status(400).json({ message: error.message }).end();
  }

  // If validation passes, proceed to the next middleware.
  next();
}

function userResetPassword(req, res, next) {
  // Define schema for validation.
  const userResetPasswordSchema = Joi.object({
    // Email must be a valid email string and is required.
    email: Joi.string().email().required().messages({
      "string.email": "Email must be a valid email",
      "any.required": "Email is a required field",
    }),
  });

  // Validate request body against the schema.
  const { error } = userResetPasswordSchema.validate(req.body);

  // If there is validation error, print it to the console in red color and return a 400 response.
  if (error) {
    console.error(`Joi Error: ${error}`.red);
    return res.status(400).json({ message: error.message }).end();
  }

  // If validation passes, proceed to the next middleware.
  next();
}

// Export all the validation middlewares.
module.exports = {
  userJoi,
  userDeleteJoi,
  userUpdateProfile,
  userResetPassword,
};
