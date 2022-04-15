var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const x= req.query.x || getRandomArbitrary(0, 60);
  var b1 = Math.atan2(x);
  var b2 = Math.atanh(x);
  var b3 = Math.cbrt(x);
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  res.send(`Math.atan2(${x}) is ${b1} ; Math.atanh(${x}) is ${b2} ; Math.cbrt(${x}) is ${b3}\n`);
});

module.exports = router;