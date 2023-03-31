const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const port = 5000;

const routes = require('./routes');

app.listen(port,() => {
    console.log("servindo na porta " + port);
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public'))); //conectar com a pasta public

const basePath = path.join(__dirname, 'views');

app.use('/', routes);

app.get('/', (req, res) => {
    res.render('index');
})

