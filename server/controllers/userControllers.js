const express = require('express')
const router = express.Router()
const mysql = require('mysql');


// Connection Pool
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

router.get('/user', (req, res) => {
    connection.query('SELECT * FROM userconform WHERE status = "active"', (err, rows) => {
      if (!err) {
        res.render('user', { rows });
      } else {
        console.log(err);
      }
      //console.log('The data from user table: \n', rows);
    });
  })
  //Form Display
  
  module.exports = router;