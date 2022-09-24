const mysql = require("mysql");
let dotenv = require('dotenv').config()

// DB connect
const connection = mysql.createPool({
    host: dotenv.parsed.HOST,
    user: dotenv.parsed.USER,
    password: dotenv.parsed.PASS,
    database: dotenv.parsed.DB
})

module.exports = connection;