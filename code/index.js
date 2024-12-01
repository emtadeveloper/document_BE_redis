const express = require("express");

const redis = require("redis");

const client = redis.createClient();

client.on("error", (err) => {
  console.error("error", err);
});

client.on("connect", () => {
  console.log("Connected To Redis");
});

const port = 3000;
const app = express();

app.listen(port, () => {
  console.log("App run ....");
});
