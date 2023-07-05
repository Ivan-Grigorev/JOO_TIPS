const Joi = require("joi");
require("colors");

function subscriptionJoi(req, res, next) {
  const subscriptionSchema = Joi.object({
    email: Joi.string().email(),
    subscription: {
      type: Joi.string(),
      isPremium: Joi.boolean(),
      expiredIn: Joi.number(),
    },
  });

  const { error } = subscriptionSchema.validate(req.body);

  if (error) {
    console.error(`Joi subscription error: ${error}`.red);
    return res.status(400).json({ message: error.message }).end();
  }

  next();
}

module.exports = subscriptionJoi;
