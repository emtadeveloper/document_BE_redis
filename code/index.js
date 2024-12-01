const express = require("express");
const redis = require("redis");

const port = 3000;
const app = express();

const client = redis.createClient({
  url: "redis://127.0.0.1:6379", // اطمینان از استفاده از IPv4
});

client.on("error", (err) => {
  console.error("Error:", err);
});

client
  .connect()
  .then(() => {
    console.log("Connected to Redis");
  })
  .catch((err) => {
    console.error("Failed to connect to Redis:", err);
  });

app.get("/set", (req, res) => {
  client.set("test", "value test");
  res.send("your key is set !");
});

app.get("/get", async (req, res) => {
  let test = await client.get("test");
  res.send(`your key is ${test} !`);
});

app.get("/setjson", async (req, res) => {
  const data = {
    name: "moein",
    age: 20,
    mobile: "091541454",
  };

  await client.set("user:100", JSON.stringify(data));

  res.send("your key is set !");
});

app.get("/getjson", async (req, res) => {
  const stringData = await client.get("user:100");
  const data = JSON.parse(stringData);
  await client.set("user:100", JSON.stringify(data));
  res.send(data);
});
app.listen(port, () => {
  console.log("App run ....");
});
