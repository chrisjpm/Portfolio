var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { domain: 'SwimScotland', title: 'Home', layout: 'layout.hbs' });
});

module.exports = router;
