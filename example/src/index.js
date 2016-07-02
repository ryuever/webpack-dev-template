import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Day from './Day';
import Sample from 'Sample';

require('Sample/dist/sample.css');

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='app-testing'>
        <Day />
        <Sample />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
