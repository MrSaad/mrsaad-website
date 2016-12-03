var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Saad Ahmed' });
});

/* GET download dataset file, for Master's Thesis */
router.get('/datasets/:filename', function(req, res){
	var file = '../data/'+req.params.filename+'.tar.gz';

	// if file exists, download it
	fs.access(file, fs.F_OK, function(err) {
	    if (!err) {
	        res.download(file);
	    } else {
	        console.log(file+' does not exist.');
	    }
	});
});

module.exports = router;
