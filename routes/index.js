var express = require('express');
var router = express.Router();
var request = require('request');
var movieModel = require('../models/movies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/movies', function(req, res, next) {
  request("https://api.themoviedb.org/3/discover/movie?api_key=f464c3ad43a52a8cd59f4f1e13f28695&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1", function(error, response, body) {
    body=JSON.parse(body)
  res.json({ result: true, body});

  });
});


router.get('/mymovies', function(req, res, next) {
  movieModel.find(
    function (err, movies) {
      res.json({ result: true, movies});
    })
});


router.post('/mymovies', function(req, res, next) {

  var newMovie = new movieModel ({
    title: req.body.title,
    overview : req.body.overview,
    poster_path : req.body.poster_path,
    idMovieDB : req.body._id,
   });

   newMovie.save(
    function (error, movie) {
    res.json({ result: true, movie });
  });
});


router.delete('/mymovies/:movieId', function(req, res, next) { 
  movieModel.deleteOne(
    { idMovieDB: req.params.movieId}, 
    function(error) {
      res.json({ result: true});

    });
});


module.exports = router;
