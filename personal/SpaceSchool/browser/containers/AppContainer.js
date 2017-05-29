import React, {Component} from 'react'
import store from '../store'
import Schools from '../components/schools'
import { connect } from 'react-redux'

const mapStateToProps = function(state, addOwnProps){
	return{
		selectedPlanet: state.selectedPlanet,
		children: addOwnProps.children
	}
}

export default connect(mapStateToProps)(Schools)