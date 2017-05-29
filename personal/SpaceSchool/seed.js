
var Promise = require('bluebird');
var db = require('./database');
var Schools = require('./database/models/models').School;
var Students = require('./database/models/models').Student;
var data = {
  Students: [
    {name: "Space Woman", year: 'Freshman'},
    {name: "Space Man", year: 'Freshman'},
    {name: "Lou Diamond", year: 'Freshman'},
    {name: "Metallica Dogpound", year: 'Sophomore'},
    {name: "Male Lazy", year: 'Sophomore'},
    {name: "Match Bushwick", year: 'Junior'},
    {name: "Slam Dime", year: 'Junior'},
    {name: "Coarse Material", year: 'Senior'},
    {name: "Chelsea Books", year: 'Senior'}
  ],
  Schools: [
    {location: "Mars"},
    {location: "Earth"},
    {location: "Luna"},
    {location: "Neptune"},
    {location: "Key Largo"},
    {location: "Orange, New Jersey"}
    ]
};


db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  const creatingStudents = Promise.map(data.Students, function (student) {
    return Students.create(student);
  });
  const creatingSchools= Promise.map(data.Schools, function (school) {
    return Schools.create(school);
  })
  return Promise.all([creatingStudents, creatingSchools]);
})
.then(function () {
  console.log('Finished inserting data');
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function () {
  db.close(); // creates but does not return a promise
  return null; // stops bluebird from complaining about un-returned promise
});