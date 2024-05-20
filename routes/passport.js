var express = require("express");
var router = express.Router();

const passportConfig = require("../config.js")[process.env.IMTBL_ENVIROMENT];

// passport
router.get("/", async (req, res) => {
  res.render("passport/passport", { passportConfig });
});

router.get("/redirect", async (req, res) => {
  //res.render("passport/passport", { code: req.query.code, state: req.query.state });
  res.render("passport/passport", { passportConfig });
});

// passport
router.get("/logout", async (req, res) => {
  res.render("passport/passport", { passportConfig });
});

module.exports = router;
