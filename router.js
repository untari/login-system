const e = require('express');
var express = require('express');
var router = express.Router();

const credential = {
    email: "login-form@untari.com",
    password: "admin123"
}
//login user
router.post('/login', (req, res) => {
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        //res.redirect('/dashboard');
        res.render('login', {title: "Login Sytem"});
    } else {
        res.render('error', {title: "Login Sytem"});
    }
});

module.exports = router;
