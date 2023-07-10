const Joi = require("joi");
require("colors");

function userJoi(req, res, next) {
  const userSchema = Joi.object({
    name: Joi.string().min(4).max(20),
    email: Joi.string().email(),
    avatar: Joi.string().min(5),
    phone: Joi.string().min(5),
    password: Joi.string(),
    confirmedPassword: Joi.string(),
    token: Joi.string(),
    // subscription: Joi.string(),
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
    email: Joi.string().email().required(),
    password: Joi.string().required(),
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
    site: Joi.object({
      about: Joi.string().min(5).max(50),
      avatarName: Joi.string().min(4).max(10),
      notifications: Joi.boolean(),
      interfaceLanguage: Joi.string(),
    }),
  });

  const { error } = userDeleteSchema.validate(req.body);

  if (error) {
    console.error(`Joi Error: ${error}`.red);
    return res.status(400).json({ message: error.message }).end();
  }

  next();
}

module.exports = { userJoi, userDeleteJoi, userUpdateProfile };
