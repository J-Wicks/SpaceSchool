const db = require ('../index.js')
const Sequelize = require ('sequelize')

const Students = db.define('student', {
	name: {type: Sequelize.STRING, allowNull: false},
	year: {type: Sequelize.ENUM('Freshman', 'Sophomore', 'Junior', 'Senior'), allowNull: false}
})

const Schools = db.define('school', {
	location: {type: Sequelize.STRING, allowNull: false}
})

Students.belongsTo(Schools)
Schools.hasMany(Students)

module.exports = {Schools, Students}

