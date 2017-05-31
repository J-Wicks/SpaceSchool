import React, {Component} from 'react'
import store from '../store'
import Students from '../components/students'
import { connect } from 'react-redux'
import axios from 'axios'
import School from '../components/School'

class SchoolContainer extends Component {
  constructor(props) {
    super(props);

  }





	render() {
	    return (
	    	<School
	    	school={this.props.school}
	    	onChange={this.updateSchool}
	    	students={this.props.students}/>
	    );
	}
}

const mapStateToProps = function(state, addOwnProps){

	const studentsOfSchool = state.students.filter((student)=> {
		return student.schoolId === state.selectedSchool.id
	})

	return{
		school: state.selectedSchool,
		children: addOwnProps.children,
		students: studentsOfSchool
	}
}

export default connect(mapStateToProps)(SchoolContainer)
