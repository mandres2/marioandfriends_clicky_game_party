// React declaration of dependency
import React from 'react';
// Import the file Header.css
import './Header.css';

const Header = props => (
  <div className="header">
    <div className="title">
      {props.children}</div>
      <br></br>
      div className="scores">
      Score: {props.score}
      <br></br>
      Highscore: {props.highscore}
    <br></br>
    <div className="rules">Click on an image to earn points, but don't click on any more than once!</div>
  </div>
);

// Export the object so that it can be run in App.js
export default Header;