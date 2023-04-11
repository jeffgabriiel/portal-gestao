import express from 'express';
const app = express();
const port = 5000;
import * as ejs from 'ejs';
import router from './routes/routes.js';
import sequelizeConnection from './database/connection.js';
// pegar o body
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());
app.engine('html', ejs.renderFile); // Template Engine  //MUDAR PARA handlebars
app.set('view engine', 'html'); // Template Engine
app.use('/public', express.static('public')); //conectar com a pasta public
app.use('/', router);
app.get('/', (req, res) => {
    res.render('index');
});
sequelizeConnection.sync().then(() => {
    app.listen(port, () => {
        console.log("servindo na porta " + port);
    });
}).catch((err) => { console.log(err); });
