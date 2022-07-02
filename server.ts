import mysql from 'mysql2';
import express from "express"
const app = express()
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 8888,
  database: 'xdhp_6'
});

connection.connect(()=>{
    console.log("mysql connected")
})

app.listen(8002, ()=>{
    console.log("server conected on port 8000")
})