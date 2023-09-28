const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to the proxy api");
});
app.get("/maindata", (req, res) => {
  axios
    .get(
      "https://main--mywebsite--narayan-chatalwar.hlx.live/dataforindex.json"
    )
    .then((result) => res.send(result.data))
    .catch((err) => res.send(err));
});

app.get("/footerdata", (req, res) => {
  axios
    .get(
      "https://main--mywebsite--narayan-chatalwar.hlx.live/dataforfooter.json"
    )
    .then((result) => res.send(result.data))
    .catch((err) => res.send(err));
});

app.listen("8080", () => {
  console.log("listening on port 8080");
});
