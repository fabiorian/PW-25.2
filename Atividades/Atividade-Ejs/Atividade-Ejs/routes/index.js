var express = require('express');
var router = express.Router();
//middleware
const myLogger = function (req, res, next) {  
  console.log('LOGGED');
  next();}

router.use(myLogger)

/* GET home page. */
router.get('/', function(req, res) {
  var response = '<h1 style="font-size:700px;">Index!</h1>';
  res.send(response);
});
module.exports = router;
