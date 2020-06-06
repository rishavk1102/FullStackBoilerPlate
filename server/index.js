const express = require("express");

const app = express();

app.get("/api/login", (req, res) => {
  res.send("<h1>Hello from backend</h1>");
});

app.listen(8080, (req, res) => {
  console.log("server running on 8080");
});
