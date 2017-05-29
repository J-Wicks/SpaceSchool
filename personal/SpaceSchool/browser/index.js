import '../index.scss';


import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux'
import {hashHistory, Router, Route, IndexRedirect} from 'react-router';
import Schools from './components/schools'
import Students from './components/students'
import AppContainer from './containers/AppContainer'

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} > 
			<Route path='/' component={AppContainer} />
		</Router>
	</Provider> ,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
)