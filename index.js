const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');

app.listen(5000,() => {
    console.log("servindo");
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'));
})