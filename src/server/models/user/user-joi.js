const Joi = require("joi");
require("colors");

function userJoi(req, res, next) {
  const userSchema = Joi.object({
    name: Joi.string().min(4).max(20).messages({
      "string.min": `Name should have a minimum length of {#limit}`,
      "string.max": `Name should have a maximum length of {#limit}`,
    }),
    email: Joi.string().email().messages({
      "string.email": "Email must be a valid email",
    }),
    avatar: Joi.string().min(5).messages({
      "string.min": `Avatar should have a minimum length of {#limit}`,
    }),
    password: Joi.string().messages({
      "string.base": "Password must be a string",
    }),
    confirmedPassword: Joi.string().messages({
      "string.base": "Confirmed password must be a string",
    }),
    token: Joi.string().messages({
      "string.base": "Token must be a string",
    }),
  });

  const { error } = userSchema.validate(req.body);

  if (error) {
    console.error(`Joi Error: ${error}`.red);
    return res.status(400).json({ message: error.message }).end();
  }

  next();
}

function userDeleteJoi(req, res, next) {
  const userDeleteSchema = Joi.object({
    email: Joi.string().email().required().messages({
      "string.email": "Email must be a valid email",
      "any.required": "Email is a required field",
    }),
    password: Joi.string().required().messages({
      "string.base": "Password must be a string",
      "any.required": "Password is a required field",
    }),
  });

  const { error } = userDeleteSchema.validate(req.body);

  if (error) {
    console.error(`Joi Error: ${error}`.red);
    return res.status(400).json({ message: error.message }).end();
  }

  next();
}

function userUpdateProfile(req, res, next) {
  const userDeleteSchema = Joi.object({
    phone: Joi.string().min(5).max(10).allow(null).messages({
      "string.min": `Phone number should have a minimum length of {#limit}`,
      "string.max": `Phone number should have a maximum length of {#limit}`,
    }),
    email: Joi.string().email().allow(null).messages({
      "string.email": "Email must be a valid email",
    }),
    profile: Joi.object({
      about: Joi.string().max(50).allow(null).messages({
        "string.max": `About section should have a maximum length of {#limit}`,
      }),
      avatarName: Joi.string().min(5).max(10).allow(null).messages({
        "string.min": `Avatar name should have a minimum length of {#limit}`,
        "string.max": `Avatar name should have a maximum length of {#limit}`,
      }),
      notifications: Joi.boolean().optional(),
      interfaceLanguage: Joi.string().optional(),
    })
      .or("about", "avatarName", "notifications", "interfaceLanguage")
      .messages({
        "object.or": "At least one of {#peerNames} should be provided",
      }),
  })
    .or("phone", "email", "profile")
    .messages({
      "object.or": "At least one of {#peerNames} should be provided",
    });

  const { error } = userDeleteSchema.validate(req.body);

  if (error) {
    console.error(`Joi Error: ${error}`.red);
    return res.status(400).json({ message: error.message }).end();
  }

  next();
}

module.exports = { userJoi, userDeleteJoi, userUpdateProfile };
