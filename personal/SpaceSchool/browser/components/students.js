import React from 'react';
import {Link} from 'react-router';
import store from '../store';

const Students = (props) => {
  const changeHandler = function(event){
    console.log(event.target)
    // props.updateSchool(event)
  }

  return (
    <div>
      <h3>Students</h3>
      <div className="row">
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
      {
          props.children
      }
      </div>
    </div>
  );
}

export default Students;