var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { domain: 'CJPM. Portfolio:', title: 'Contact Me', layout: 'layout.hbs' });
});

module.exports = router;
