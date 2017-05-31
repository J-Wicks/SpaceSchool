import React, {Component} from 'react'
import store from '../store'
import Students from '../components/students'
import { connect } from 'react-redux'
import axios from 'axios'

class StudentsContainer extends Component {
  constructor(props) {
    super(props);
    // this.updateSchool = this.updateSchool.bind(this)
  }



	render() {
	    return (
	    	<div>
	    	<Students 
	    	students={this.props.students}
	    	schools={this.props.schools}
	    	children={this.props.children}/>

    		</div>
	    );
	}
}

const mapStateToProps = function(state, addOwnProps){
	return{
		selectedPlanet: state.selectedPlanet,
		students: state.students,
		children: addOwnProps.children,
		schools: state.schools
	}
}

export default connect(mapStateToProps)(StudentsContainer)
