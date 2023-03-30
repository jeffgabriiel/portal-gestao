const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const port = 5000;

app.listen(port,() => {
    console.log("servindo na porta " + port);
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public'))); //conectar com a pasta public

app.get('/', (req, res) => {
    res.render(path.join(__dirname+'/views/index.html'));
})

