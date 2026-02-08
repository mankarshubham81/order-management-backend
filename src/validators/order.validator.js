const Joi = require("joi");

const createOrderSchema = Joi.object({
  customer: Joi.object({
    name: Joi.string().min(2).required(),
    address: Joi.string().min(5).required(),
    phone: Joi.string().min(8).required()
  }).required(),

  items: Joi.array()
    .items(
      Joi.object({
        itemId: Joi.string().required(),
        quantity: Joi.number().min(1).required()
      })
    )
    .min(1)
    .required()
});

module.exports = {
  createOrderSchema
};