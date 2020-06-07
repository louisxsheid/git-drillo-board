/**
 * @module  Header
 * @author Katty Polyak and
 * @date Sat, Jun 6, 2020
 * @description presentation component that renders our header title
 */

import React from 'react';

const Header = props => (
  <div className="Header">
    <h1> Git-Drillo </h1>
    <button onClick={props.returnToProjectsBoard}> Return to Projects Board </button>
  </div>
);

export default Header;
