import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// This is the only time React is currently interacting with the real DOM. It is done by executing a particular function called: ReactDOM.render()
ReactDOM.render(<App />, document.getElementById('root'));