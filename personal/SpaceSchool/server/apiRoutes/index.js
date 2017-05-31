const router = require('express').Router();
const Schools = require('../../database/models/models').Schools
const Students = require('../../database/models/models').Students


router.get('/schools', function(req, res, next){
	Schools.findAll({})
	.then(allSchools => {
		res.send(allSchools)
	}).catch(next)
})

router.get('/students', function(req, res, next){
	Students.findAll({include: [Schools]})
	.then(allStudents => {
		res.send(allStudents)
	}).catch(next)
})

router.get('/students/:studentId', function(req, res, next){
	Students.findById(req.params.studentId, {include: [Schools]})
	.then(foundStudent => {
		res.send(foundStudent)
	}).catch(next)
})

router.get('/schools/:schoolId', function(req, res, next){
	Schools.findById(req.params.schoolId)
	.then(foundSchool => {
		res.send(foundSchool)
	}).catch(next)
})

router.post('/students/:studentId', function(req, res, next){

	Students.findById(req.params.studentId)
	.then(foundStudent => {
		return foundStudent.update({schoolId: req.body.id})
		
	})
	.then(updatedStudent => {
		res.send(updatedStudent)
	})
	.catch(next)
})

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;