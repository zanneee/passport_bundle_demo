var express = require("express");
var router = express.Router();

const env = "Immutable_zkevm_testnet"; //Immutable_zkevm_testnet, Immutable_zkevm_mainnet
const passportConfig = require("../config.js")[env];

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
