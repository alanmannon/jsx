// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = function () {
  const buttonText = 'Click Here';
  return (
    <div>
      <label htmlFor="name" className="label" >Enter name:</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
    </div >
  );
}
// TIPS


// or const App = () => {}
// jsx props should use double quotes, non-jsx use single quotes
// use className instead of class tag to avoid compile confusion





// Take the react component and show on browser
ReactDOM.render(
  <App />, document.querySelector('#root')
);