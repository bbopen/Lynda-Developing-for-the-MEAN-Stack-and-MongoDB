var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.user) {
    return res.redirect('/orders');
  }
  res.render('index', { title: 'Login' });
});

module.exports = router;
