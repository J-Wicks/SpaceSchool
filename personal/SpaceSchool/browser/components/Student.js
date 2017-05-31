import React, {Component} from 'react';
import store from '../store';
import {Link} from 'react-router';



const Student = (props) => {

	console.log(props)
  // const selectAlbum = props.selectAlbum;
  return (
    <div>
      <h3>{props.student.name}</h3>
      <div className="row">
      	<h4> Campus: 
      	<Link to={`/schools/${props.student.schoolId}`} > {props.school && props.school.location} </Link>
      	</h4>
            <select value={props.student.schoolId} onChange={props.onChange}> 
	        {
	          props.schools.map((school) => {
	          
	            return <option key={school.id} value={school.id}> {school.location} </option>
	          }
	          )
	        }
	      	</select>
	    <h4> Year: </h4>
	    <span>{props.student.year}</span>
      </div>
    </div>
  );
}

export default Student;