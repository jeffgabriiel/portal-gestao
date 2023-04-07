const router = require('express').Router();

const connectionPool = require('../database/connection');

require('express')().use(
    require('express').urlencoded({
        extended: true,
    }),
);
require('express')().use(require('express').json());

router.get('/passagens', (req, res) => {
    res.render('passagens');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register/insertRegister', (req, res) => { //inserir dados no database
    const email = req.body.email;
    const password = req.body.password;

    // usando queries
    const insert = `INSERT INTO users (??, ??) VALUES (?, ?)`; // ?? = coluna ; ? = dados
    const data = ['email', 'password', email, password];

    connectionPool.query(insert, data, (err) => {
        if(err){
            console.log(err);
        }

        res.redirect('/users');
    })
});

router.get('/users', (req, res) => { // lendo dados do banco de dados MySQL
    const read = `SELECT * FROM users`;
    connectionPool.query(read, (err, data) => {
        if(err){
            console.log(err);
        }
        const users = data;
        res.render('users', { users })
    });
});

router.get('/users/:id', (req, res) => { // filtrando dados do banco de dados MySQL com o ID especifico
    const id = req.params.id; 

    // usando queries
    const read = `SELECT * FROM users WHERE ?? = ?`;// ?? = coluna ; ? = dados
    const data = ['id', id];

    connectionPool.query(read, data, (err, data) => {
        if(err){
            console.log(err);
        }
        const users = data[0];
        res.render('usersID', { users })
    });
});

router.get('/users/edit/:id', (req, res) => { // view do editando dados do banco de dados MySQL com o ID especifico
    const id = req.params.id;  

    // usando queries
    const edit = `SELECT * FROM users WHERE ?? = ?`;// ?? = coluna ; ? = dados
    const data = ['id', id];

    connectionPool.query(edit, data, (err, data) => {
        if(err){
            console.log(err);
        }
        const users = data[0];
        res.render('usersEdit', { users })
    });
});
router.post('/users/edit', (req, res) => { // editando dados do banco de dados MySQL com o ID especifico
    const id = req.body.id;  
    const email = req.body.email;
    const password = req.body.password;

    // usando queries
    const edit = `UPDATE users SET ?? = ?, ?? = ? WHERE ?? = ?`;// ?? = coluna ; ? = dados
    const data = ['email', email, 'password', password, 'id', id];

    connectionPool.query(edit, data, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/users')
    });
});

router.post('/users/delete/:id', (req, res) => { // deletadno dados do banco de dados MySQL com o ID especifico
    const id = req.params.id; 

    // usando queries
    const sql = `DELETE FROM users WHERE ?? = ?`;// ?? = coluna ; ? = dados
    const data = ['id', id];

    connectionPool.query(sql, data, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/users')
    });
});

module.exports = router;