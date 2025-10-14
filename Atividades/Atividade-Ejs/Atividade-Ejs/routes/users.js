var express = require('express');
var router = express.Router();
//middleware
const myLogger = function (req, res, next) {  
  console.log('LOGGED');
  next();}

router.use(myLogger)

/* GET users listing. */
router.get('/', function(req, res) {
  res.redirect('/users/signup');
});
router.get('/signin', function(req, res) {
  res.send('<h1 style="font-size:500px;">Signin!</h1>')
});
router.get('/signup', function(req, res) {
  res.send('<h1 style="font-size:500px;">Signup?!</h1>')
});
router.get('/:userid', function(req, res) {
  var userid = req.params.userid;
  res.send(`<h1 style="font-size:300px;>Bem-vindo, ${userid}!</h1>`);
});
module.exports = router;
