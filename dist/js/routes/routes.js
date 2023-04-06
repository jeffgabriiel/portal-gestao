const router = require('express').Router();
require('express')().use(require('express').urlencoded({
    extended: true,
}));
require('express')().use(require('express').json());
const connection = require('mysql').createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jeff1238',
    database: 'travelagency',
});
router.get('/passagens', (req, res) => {
    res.render('passagens');
});
router.get('/login', (req, res) => {
    res.render('login');
});
router.post('/login/insertLogin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const insert = `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`;
    connection.query(insert, (err) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/users');
    });
});
router.get('/users', (req, res) => {
    const read = `SELECT * FROM users`;
    connection.query(read, (err, data) => {
        if (err) {
            console.log(err);
        }
        const users = data;
        res.render('users', { users });
    });
});
router.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const read = `SELECT * FROM users WHERE id = ${id}`;
    connection.query(read, (err, data) => {
        if (err) {
            console.log(err);
        }
        const users = data[0];
        res.render('usersID', { users });
    });
});
module.exports = router;
