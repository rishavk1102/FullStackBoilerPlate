const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const apiProxy = createProxyMiddleware("/api", {
  target: "http://localhost:8080",
});
app.use("/api", apiProxy);

app.get("/", (req, res) => {
  res.send("<h1>Hello from client</h1>");
});

app.listen(3000, (req, res) => {
  console.log("client running on port 3000");
});
