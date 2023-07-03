const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const value = req.body.term;
  axios
    .get(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.SEARCH_ENGINE_ID}&q=${value}`
    )
    .then((result) => {
      console.log('hi', result.data.items);
      res.send(result.data.items);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening port on ${process.env.PORT}`);
});
