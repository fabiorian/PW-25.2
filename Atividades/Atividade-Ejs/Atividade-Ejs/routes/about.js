var express = require('express');
var router = express.Router()
//middleware
const myLogger = function (req, res, next) {  
  console.log('LOGGED');
  next();}

router.use(myLogger)

router.get('/', function (req, res) {
  res.send('<h1 style="font-size:700px;">About!</h1>')
});

module.exports = router;
