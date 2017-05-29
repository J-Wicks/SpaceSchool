const router = require('express').Router();
const Schools = require('../../database/models/models').Schools
const Students = require('../../database/models/models').Students
// router.use('/users', require('./users')); // matches all requests to /api/users/
// router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/
// router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/

router.get('/schools', function(req, res, next){
	Schools.findAll({})
	.then(allSchools => {
		res.send(allSchools)
	}).catch(next)
})

router.get('/students', function(req, res, next){
	Students.findAll({})
	.then(allStudents => {
		res.send(allStudents)
	}).catch(next)
})

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;