const router = require('express').Router();

require('express')().use(
    require('express').urlencoded({
        extended: true,
    }),
);
require('express')().use(require('express').json());

const connection = require('mysql').createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jeff1238',
    database: 'travelagency',
});

router.get('/passagens', (req, res) => {
    res.render('passagens')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.post('/login/insertLogin', (req, res) => { //inserir dados no database
    const email = req.body.email;
    const password = req.body.password;

    const insert = `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`

    connection.query(insert, (err) => {
        if(err){
            console.log(err);
        }

        res.redirect('/');
    })
});

/*
router.get('/hoteis', (req, res) => {
    res.render('passagens')
});

router.get('/carros', (req, res) => {
    res.render('passagens')
});

router.get('/lugares', (req, res) => {
    res.render('passagens')
});

router.get('/contato', (req, res) => {
    res.render('passagens')
});
*/

module.exports = router;