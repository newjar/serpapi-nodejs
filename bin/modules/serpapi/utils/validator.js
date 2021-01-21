const validate = require("validate.js");
const wrapper = require("../../../helpers/utils/wrapper");

const isValidPayload = (payload, schema) => {
  const { value, error } = schema.validate(payload);
  if (!validate.isEmpty(error)) {
    const errData = error.details.shift();
    return wrapper.response(errData);
  }
  return wrapper.data({ err: null, data: value });
};

module.exports = {
  isValidPayload,
};
