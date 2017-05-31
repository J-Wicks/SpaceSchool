import React, {Component} from 'react';
import store from '../store';
import {Link} from 'react-router';



const School = (props) => {


  // const selectAlbum = props.selectAlbum;
  return (
    <div>
      <h3>{props.school.location}</h3>
      <div className="row">
      	<h4> Students: </h4>
      		<ul>
		        {
		          props.students.map((student)=>{
		            return <li key={student.id}>
		            <Link to={`/students/${student.id}`}>{student.name} </Link>

		            </li>
		          }
		            )

		        }
	        </ul>
      </div>
    </div>
  );
}

export default School;