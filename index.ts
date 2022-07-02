const { json } = require("express")
const auth = require("./routes/auth")
import express from "express"
const app = express()

app.use(json())
app.use("api/v1/auth", auth)


module.exports = app;