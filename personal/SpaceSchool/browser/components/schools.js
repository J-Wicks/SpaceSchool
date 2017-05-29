import React, {Component} from 'react';
import store from '../store';
import {Link} from 'react-router';

const Schools = (props) => {
  // const selectAlbum = props.selectAlbum;

  return (
    <div>
      <h3>Schools</h3>
      <div className="row">
	      <ul>
	      {
	      	props.schools.map((school)=>{
	      		return<li>{school.location}</li>
	      	}
	      		)

	      }
	      </ul>
      </div>
    </div>
  );
}

export default Schools;