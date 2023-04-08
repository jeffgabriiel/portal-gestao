const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = 5000;

require('./models/User');
require('./models/Ticket');

// pegar o body
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.engine('html', require('ejs').renderFile); // Template Engine  //MUDAR PARA handlebars
app.set('view engine', 'html'); // Template Engine
app.use('/public', express.static(path.join(__dirname, '../../public'))); //conectar com a pasta public

const routes = require('./routes/routes');
app.use('/', routes);

app.get('/', (req, res) => {
    res.render('index');
});

require('./database/connection').sync().then(() => { //
    app.listen(port,() => {
        console.log("servindo na porta " + port);
    });
}).catch((err) => { console.log(err) });