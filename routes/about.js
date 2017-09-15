var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { domain: 'CJPM. Portfolio:', title: 'About Me', layout: 'layout.hbs' });
});

module.exports = router;
