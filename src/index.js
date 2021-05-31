import React from 'react';
import {render} from 'react-dom';

import data from './testData';

console.log(data);

import App from './components/App';

render(
  <App  /> ,
  document.getElementById('root')
);
