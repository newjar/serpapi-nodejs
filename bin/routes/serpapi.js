const express = require("express");
const router = express.Router();
const serpApiHandler = require("../modules/serpapi/handlers/api_handler");

router.get("/articles/search", [], serpApiHandler.getArticlesOnGoogle);

module.exports = router;
