const router = require('express').Router();
const connection = require('../database/connection');
const ticket = require('../models/Ticket');

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

router.post('/register/insertRegister', async (req, res) => { //inserir dados no database

    // com sequelize
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    await require('../models/User').create({ name, email, password });

    res.redirect('/users');

    /* // MySQL direto
    // usando queries
    const insert = `INSERT INTO users (??, ??) VALUES (?, ?)`; // ?? = coluna ; ? = dados
    const data = ['email', 'password', email, password];

    connection.query(insert, data, (err) => {
        if(err){
            console.log(err);
        }

        res.redirect('/users');
    })
    */
});

router.get('/users', async (req, res) => { // lendo dados do banco de dados MySQL
    // com sequelize
    const users = await require('../models/User').findAll({ raw: true });
    res.render('users', { users: users });

    /*
    const read = `SELECT * FROM users`;
    connection.query(read, (err, data) => {
        if(err){
            console.log(err);
        }
        const users = data;
        res.render('users', { users })
    });
    */
});

router.get('/users/:id', async (req, res) => { // filtrando dados do banco de dados MySQL com o ID especifico
    // com sequelize
    const id = req.params.id; 
    const users = await require('../models/User').findOne({  raw: true, where: { id: id } });
    res.render('usersID', { users });
    /*
    // usando queries
    const read = `SELECT * FROM users WHERE ?? = ?`;// ?? = coluna ; ? = dados
    const data = ['id', id];

    connection.query(read, data, (err, data) => {
        if(err){
            console.log(err);
        }
        const users = data[0];
        res.render('usersID', { users })
    });
    */
});

router.get('/users/edit/:id', async (req, res) => { // view do editando dados do banco de dados MySQL com o ID especifico
    // com sequelize
    const id = req.params.id;  
    const users = await require('../models/User').findOne({  raw: true, where: { id: id } });
    res.render('usersEdit', { users });
    /*
    // usando queries
    const edit = `SELECT * FROM users WHERE ?? = ?`;// ?? = coluna ; ? = dados
    const data = ['id', id];

    connection.query(edit, data, (err, data) => {
        if(err){
            console.log(err);
        }
        const users = data[0];
        res.render('usersEdit', { users })
    });
    */
});

router.post('/users/edit', async (req, res) => { // editando dados do banco de dados MySQL com o ID especifico
    // com sequelize
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const userData = {
        id, 
        name, 
        email, 
        password,
    }
    const users = await require('../models/User').update(userData, {  raw: true, where: { id: id } });
    res.redirect('/users');
    /*
    // usando queries
    const edit = `UPDATE users SET ?? = ?, ?? = ? WHERE ?? = ?`;// ?? = coluna ; ? = dados
    const data = ['email', email, 'password', password, 'id', id];

    connection.query(edit, data, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/users')
    });
    */  
});

router.post('/users/delete/:id', async (req, res) => { // deletadno dados do banco de dados MySQL com o ID especifico
    // com sequelize
    const id = req.params.id;
    await require('../models/User').destroy({  raw: true, where: { id: id } });
    res.redirect('/users');
    /*
    // usando queries
    const sql = `DELETE FROM users WHERE ?? = ?`;// ?? = coluna ; ? = dados
    const data = ['id', id];

    connection.query(sql, data, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/users')
    });
    */
});

module.exports = router;