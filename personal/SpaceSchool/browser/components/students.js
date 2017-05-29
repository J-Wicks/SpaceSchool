import React from 'react';
import {Link} from 'react-router';


const Students = (props) => {
  // const selectAlbum = props.selectAlbum;

  return (
    <div>
      <h3>Students</h3>
      <div className="row">
        <ul>
        {
          props.students.map((student)=>{
            return<li>{student.name}</li>
          }
            )

        }
        </ul>
      </div>
    </div>
  );
}

export default Students;