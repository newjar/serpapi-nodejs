const SerpApi = require("./domain");

const searchArticleOnGoogle = async (q, offset, limit) => {
  const serpApi = new SerpApi();
  const getData = async (q, offset, limit) =>
    serpApi.searchArticleOnGoogle(q, offset, limit);
  return getData(q, offset, limit);
};

module.exports = {
  searchArticleOnGoogle,
};
