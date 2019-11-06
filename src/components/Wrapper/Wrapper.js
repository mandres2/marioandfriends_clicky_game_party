// React declaration of dependency
import React from 'react';
// Import the file Wrapper.css
import './Wrapper.css';

const Wrapper = props => <div className="wrapper">{props.children}</div>

// Export the object so that it can be used
export default Wrapper;