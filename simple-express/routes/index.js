const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/login", (req, res, next) => {
  console.log(req);
  const { email, password } = req.body;
  res.render("response", { title: "App", email, password });
});

module.exports = router;
