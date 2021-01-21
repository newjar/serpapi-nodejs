const serpApi = require("../../../../helpers/serpapi/sdk");

class Query {
  async searchArticleOnGoogle(q, offset, limit) {
    serpApi.init();
    const result = await serpApi.searchArticle(q, offset, limit);
    return result;
  }
}

module.exports = Query;
