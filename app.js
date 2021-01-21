const express = require("express");
const cors = require("cors");
const config = require("./bin/configs/global_config");
const app = express();
const port = config.get("/port") || 3000;
const articles = require("./bin/routes/serpapi");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running properly");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use(articles);
