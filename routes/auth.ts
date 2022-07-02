const express = require("express");
const {
  login,
  signUp,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");
const router = express.Router();


router
  .post("/login", login)
  .post("/signup", signUp)
  .post("/forgotPassword", forgotPassword)
  .post("/resetPassword/:resetToken", resetPassword);

module.exports = router