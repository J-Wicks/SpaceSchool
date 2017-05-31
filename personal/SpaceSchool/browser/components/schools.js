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
	      		return<li key={school.id}><Link to={`/schools/${school.id}`} key={school.id}>{school.location}</Link></li>
	      	}
	      		)

	      }
	      </ul>
      </div>
    </div>
  );
}

export default Schools;