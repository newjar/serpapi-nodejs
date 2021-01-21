require("dotenv").config();
const confidence = require("confidence");

const config = {
  port: process.env.PORT,
  serpApiSecretKey: process.env.SERPAPI_SECRET_KEY,
};

const store = new confidence.Store(config);
exports.get = (key) => store.get(key);
