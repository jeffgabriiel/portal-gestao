const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const port = 5000;

app.engine('html', require('ejs').renderFile); // Template Engine  //MUDAR PARA handlebars
app.set('view engine', 'html'); // Template Engine
app.use('/public', express.static(path.join(__dirname, '../../public'))); //conectar com a pasta public

const routes = require('./routes/routes');
app.use('/', routes);

app.get('/', (req, res) => {
    res.render('index');
})

const mysql = require('mysql'); // conecção ao database MySQL
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'travelagency', // nome do database no mysql
});

conn.connect((err) => {
    if(err){
        console.log(err);
    }

    console.log('conectado ao mysql');

    app.listen(port,() => {
        console.log("servindo na porta " + port);
    });
});

