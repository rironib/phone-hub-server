const express = require("express");
const cors = require("cors");
const app = express();
const phones = require("./phones.json");
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world from my phone server");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phone/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("I need data for id", id);
  const phone = phones.find((phone) => phone.id === id) || {
    message: "No data found.",
  };
  // const phone = phones[id];
  res.send(phone);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
