// React declaration of dependency;
import React from 'react';
// import the file: Card.css
import './Card.css';

// Declare a variable called Card and set it as a prop. Using the fat arrow function, bind the function to a div named: className
const Card = props => (
  <div className = "card" onClick={() =>
  props.clickCount(props.id)}>
    <div className = "img-container">
      <img alt = {props.name} src={props.image}/>
    </div>
  </div>
);

// Export the object so that it can be used
export default Card;