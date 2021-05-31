import React from 'react';
import {render} from 'react-dom';

import App from './components/App';

render(
  <App initialContests={window.initialData.contests} /> ,
  document.getElementById('root')
);


