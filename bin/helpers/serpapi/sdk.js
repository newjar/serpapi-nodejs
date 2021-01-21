const config = require("../../configs/global_config");
const wrapper = require("../utils/wrapper");
const serpApi = require("google-search-results-nodejs");
const serpApiSecretKey = config.get("/serpApiSecretKey");
const util = require("util");

let serpApiClient;

const init = async () => {
  try {
    serpApiClient = new serpApi.GoogleSearch(serpApiSecretKey);
    if (!serpApiSecretKey) {
      console.log("SerpApi secret key not found, must be filled in .env file");
    }
  } catch (error) {
    return wrapper.error("Something error on serpapi", 500);
  }
};

function getJson(parameter, resolve, reject) {
  try {
    serpApiClient.json(parameter, resolve);
  } catch (e) {
    reject(e);
  }
}
let result;

const searchArticle = async (q, offset, limit) => {
  const options = {
    engine: "google",
    q,
    location: "Indonesia",
    google_domain: "google.co.id",
    gl: "id",
    hl: "id",
    start: offset,
    num: limit,
  };
  const data = util.promisify(getJson);
  await data[util.promisify.custom](options)
    .then((data) => {
      result = data;
    })
    .catch((error) => {
      result = error;
    });
  const resultInformation = result.search_information;
  if (resultInformation.organic_results_state === "Fully empty") {
    return wrapper.error("Data Not Found", 404);
  }
  return wrapper.data("get articles", result);
};

module.exports = {
  init,
  searchArticle,
};
