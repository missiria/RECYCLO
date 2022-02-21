const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const http = require("http");

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, "localhost", function () {
  console.log("listening on port", port);
});
