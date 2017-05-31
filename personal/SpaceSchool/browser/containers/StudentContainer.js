import React, {Component} from 'react'
import store from '../store'
import Students from '../components/students'
import { connect } from 'react-redux'
import axios from 'axios'
import Student from '../components/Student'
import changeSchool from '../actionCreators'

class StudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	school: this.props.school
    }

    this.updateSchool = this.updateSchool.bind(this)
  }

	updateSchool (event){
		axios({
			method: 'post',
			url: `/api/students/${this.props.student.id}`,
			data: {id: event.target.value}
		})
		.then(result => {
			console.log(result)
			this.setState({school: result.data})
		})

	}

	render() {
	    return (
	    	<Student
	    	student={this.props.student}
	    	onChange={this.updateSchool}
	    	schools={this.props.schools}
	    	school={this.state.school}/>
	    );
	}
}

const mapStateToProps = function(state, addOwnProps){
	return{
		school: state.selectedStudent.school,
		student: state.selectedStudent,
		children: addOwnProps.children,
		schools: state.schools
	}
}



export default connect(mapStateToProps)(StudentContainer)
