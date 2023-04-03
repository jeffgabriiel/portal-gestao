const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const port = 5000;

const routes = require('./routes/routes.js');
const e = require('express');

app.engine('html', require('ejs').renderFile); // Template Engine  //MUDAR PARA handlebars
app.set('view engine', 'html'); // Template Engine
app.use('/public', express.static(path.join(__dirname, 'public'))); //conectar com a pasta public

app.use('/', routes);

app.get('/', (req, res) => {
    res.render('index');
})

const mysql = require('mysql'); // conecção ao database MySQL
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'travelagency',
});

conn.connect((err) => {
    if(err){
        console.log(err);
    }

    console.log('conectado aomysql');

    app.listen(port,() => {
        console.log("servindo na porta " + port);
    });
})