const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use("/", express.static(__dirname));

app.post("/api/proxyServer", function(req, res) {
  axios
    .get(req.body.base_url + req.body.query_string, {
      headers: {
        Authorization: req.body.access_token
      }
    })
    .then(function(response) {
      return res.send(response.data);
    })
    .catch(err => {
      return res.send(err);
    });
});

app.listen(port, () => console.log("Listening on port " + port));
