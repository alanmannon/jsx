// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = function () {
  return <div>Hi there</div>
}

// or const App = () => {}

// Take the react component and show on browser
ReactDOM.render(
  <App />, document.querySelector('#root')
);