const wrapper = require("../../../helpers/utils/wrapper");
const queryHandler = require("../repositories/queries/query_handler");

const getArticlesOnGoogle = async (req, res) => {
  const { q, offset, limit } = req.query;
  const getData = async (q, offset, limit) => {
    return queryHandler.searchArticleOnGoogle(q, offset, limit);
  };
  const sendResponse = async (result) => {
    const { error, message, data, code } = result;
    wrapper.response(res, error, message, data, code);
  };
  sendResponse(await getData(q, offset, limit));
};

module.exports = {
  getArticlesOnGoogle,
};
