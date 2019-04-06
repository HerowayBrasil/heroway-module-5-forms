var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {title:'Home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {title:'About'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {title:'Contact'});
});

router.post('/send', function(req, res, next) {
  res.render('sent', {title:'Contact', name: req.body.name, description: req.body.description});
});

module.exports = router;
