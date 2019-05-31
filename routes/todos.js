var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'To Do List' });
});

router.get('/', todosCtrl.index);
router.get('/:id', todosCtrl.show);


module.exports = router;
