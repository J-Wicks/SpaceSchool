import React, {Component} from 'react'
import { Link } from 'react-router'
import store from '../store'
import Schools from '../components/schools'
import { connect } from 'react-redux'
import Students from '../components/students'
import axios from 'axios'

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
    <div>
      <h3>Welcome to Space School</h3>
      <ul className="nav nav-tabs">
        <li><Link to={`/schools`}>Schools</Link></li>
        <li><Link to={`/students`}>Students</Link></li>
      </ul>
        {
	        this.props.children
    	}
    </div>
    );
  }
}


const mapStateToProps = function(state, addOwnProps){
	return{
		students: state.students,
		selectedPlanet: state.selectedPlanet,
		schools: state.schools,
		children: addOwnProps.children
	}
}


export default connect(mapStateToProps)(AppContainer)
