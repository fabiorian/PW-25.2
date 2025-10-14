var express = require('express');
var router = express.Router();
//middleware
const myLogger = function (req, res, next) {  
  console.log('LOGGED');
  next();}

router.use(myLogger)
router.use(express.json());
/* GET users listing. */
router.post('/', function(req, res) {
  const { username, email } = req.body; 
  res.send(`Usuário ${username} com email ${email} criado com sucesso!`);
});
module.exports = router;