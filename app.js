const express = require('express')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

//mysql Configure
require('dotenv').config();
//Local Port  ans local Veriable
const app = express()
const port  = process.env.PORT || 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Satic Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/javascript', express.static(__dirname + 'public/javascript'));
app.use('/img', express.static(__dirname + 'public/img'));

// Templating Engine
app.engine('hbs', exphbs( {extname: '.hbs' }));
app.set('view engine', 'hbs');

//My sql Connection
const pool = mysql.createPool({
    connectionLimit: 100,
    host                    : process.env.DB_HOST,
    user                    : process.env.DB_USER,
    password            : process.env.DB_PASS,
    database              : process.env.DB_NAME
});
//connection DB
pool.getConnection((err, connection) => {
    if(err){
        throw err;// if not DB Connected!
    }console.log('Connected as ID' +connection.threadId);
})

//Routting routes Controller in router file
    const routes = require('./server/routes/route')
    app.use('/', routes)

//Local Port listening
app.listen(port, console.info(`Port running at ${port}`))