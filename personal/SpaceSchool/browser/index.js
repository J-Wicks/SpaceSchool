import '../index.scss';

import axios from 'axios'
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux'
import {hashHistory, Router, Route, IndexRedirect} from 'react-router';
import SchoolsContainer from './containers/SchoolsContainer'
import StudentsContainer from './containers/StudentsContainer'
import AppContainer from './containers/AppContainer'
import StudentContainer from './containers/StudentContainer'
import SchoolContainer from './containers/SchoolContainer'

import { receiveSchools, receiveStudents, getStudentById, getSchoolById} from './actionCreators'

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

const onStudentEnter = function (nextRouterState) {
  const studentId = nextRouterState.params.studentId;

  store.dispatch(getStudentById(studentId));
};

const onSchoolEnter = function (nextRouterState) {
  const schoolId = nextRouterState.params.schoolId;
  store.dispatch(getSchoolById(schoolId));
};

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} > 
			<Route path='/' component={AppContainer} onEnter={onAppEnter} >
				<Route path='schools' component={SchoolsContainer}>
        </Route>
				<Route path='students' component={StudentsContainer} >
        </Route>
        <Route path='students/:studentId' component={StudentContainer} onEnter={onStudentEnter}/>
        <Route path='schools/:schoolId' component={SchoolContainer} onEnter={onSchoolEnter}/>
			</Route>

		</Router>
	</Provider> ,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
)