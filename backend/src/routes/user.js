const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.send("Hello World!", req);
});

module.exports = router;
