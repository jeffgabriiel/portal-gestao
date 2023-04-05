const router = require('express').Router();

router.get('/passagens', (req, res) => {
    res.render('passagens')
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