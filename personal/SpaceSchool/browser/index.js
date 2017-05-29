import '../index.scss';

import axios from 'axios'
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux'
import {hashHistory, Router, Route, IndexRedirect} from 'react-router';
import Schools from './components/schools'
import Students from './components/students'
import AppContainer from './containers/AppContainer'

import { receiveSchools, receiveStudents} from './actionCreators'

const onAppEnter = function () {

  Promise.all([
    axios.get('/api/schools'),
    axios.get('/api/students')
  ])
    .then(responses => responses.map(r => r.data))
    .then(([schools, students]) => {
      store.dispatch(receiveSchools(schools));
      store.dispatch(receiveStudents(students));
    });

};

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} > 
			<Route path='/' component={AppContainer} onEnter={onAppEnter} />
		</Router>
	</Provider> ,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
)