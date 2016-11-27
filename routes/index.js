var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Saad Ahmed' });
});

/* GET download dataset file, for Master's Thesis */
router.get('/datasets/parkmarcotte', function(req, res){
  var file = './data/ParkMarcotte.tar.gz';
  res.download(file); 
});

module.exports = router;
