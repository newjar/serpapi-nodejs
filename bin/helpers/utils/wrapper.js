const data = (message, data) => ({
  error: false,
  message,
  data,
  code: 200,
});

const error = (message, code) => ({
  error: true,
  message,
  data: null,
  code,
});

const response = (res, error, message, result, code) => {
  res.status(code).send({ error, message, data: result, code });
};

module.exports = {
  data,
  error,
  response,
};
