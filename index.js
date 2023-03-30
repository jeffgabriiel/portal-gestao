const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');

app.listen(5000,() => {
    console.log("servindo");
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public'))); //conectar com a pasta ublic

app.get('/', (req, res) => {
    res.render(path.join(__dirname+'/views/index.html'));
})

