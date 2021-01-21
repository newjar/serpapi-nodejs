const Query = require("./query");
const wrapper = require("../../../../helpers/utils/wrapper");

class SerpApi {
  constructor() {
    this.query = new Query();
  }

  async searchArticleOnGoogle(q, offset, limit) {
    if (!q) {
      return wrapper.error("q param query must be supplied", 500);
    }
    if (!offset) {
      offset = "1";
    }
    if (!limit) {
      limit = "10";
    }
    const result = await this.query.searchArticleOnGoogle(q, offset, limit);
    if (result.error) {
      return wrapper.error("Article not found, try different query", 404);
    }
    const data = result.data.organic_results.map((item) => ({
      query: item.title,
      link: item.link,
    }));

    data.push({ related_search: result.data.related_searches });

    return wrapper.data("Success get articles", data);
  }
}
module.exports = SerpApi;
