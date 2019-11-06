// React declaration of dependency
import React from 'react';
// Import the file Header.css
import './Header.css';

const Header = props => (
  <div className="header">
    <div className="title">
      {props.children}</div>
    <div className="scores">
      Score: {props.score}
      <br></br>
      Highscore: {props.highscore}
    </div>
  </div>
);

// Export the object so that it can be used
export default Header;