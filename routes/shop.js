var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop', { domain: 'CJPM. Portfolio:', title: 'Shop', layout: 'layout.hbs' });
});

module.exports = router;
