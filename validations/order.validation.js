const Joi = require("joi");

const addodervalid = {
  body: Joi.object().keys({
    order_id: Joi.string().required().trim(),
    user: Joi.string().trim(),
    product: Joi.string().required(),
    quantity: Joi.string().required(),
   
  }),
};

module.exports = {
  addodervalid
};
