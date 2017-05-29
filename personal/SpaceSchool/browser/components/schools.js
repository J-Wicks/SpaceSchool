import React, {Component} from 'react';
import store from '../store';
import {Link} from 'react-router';

const Schools = (props) => {
  console.log(props)
  // const selectAlbum = props.selectAlbum;

  return (
    <div>
      <h3>{props.selectedPlanet}</h3>
      <div className="row">
      	<h4> Placeholder for school</h4>
      </div>
    </div>
  );
}

export default Schools;