var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/movies', function(req, res, next) {
  res.json({ result: true });
});


router.get('/mymovies', function(req, res, next) {
  res.json({ result: true });
});


router.post('/mymovies', function(req, res, next) {
  res.json({ result: true });
});


router.delete('/mymovies/:movieId', function(req, res, next) {
  res.json({ result: true });
});


module.exports = router;
