var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
router.get('/', userController.getUser);
router.get('/:id', userController.getUserById);
router.post('/',userController.insertUser);
router.put('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);

module.exports = router;
