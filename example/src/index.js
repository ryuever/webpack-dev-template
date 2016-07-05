import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Day from './Day';
import Sample from '../../dist/Sample';

require('Sample/dist/sample.css');

class App extends Component {
  render () {
    return (
      <div className='app-testing'>
        <Day />
        <Sample />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
