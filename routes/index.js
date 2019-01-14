var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', userController.home);
router.get('/user', userController.getUser);
router.post('/user',userController.insertUser);




module.exports = router;
