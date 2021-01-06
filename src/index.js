import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Keypad from './keypadcomponent'

ReactDOM.render(<div className='main'>

  <div className="Keypad">
  <div className="component">
  <Keypad />
  </div>
  </div>
  </div>,
  document.getElementById('tree')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
