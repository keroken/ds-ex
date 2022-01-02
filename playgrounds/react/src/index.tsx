import React from 'react';
import ReactDOM from 'react-dom';

import { Color } from '@ds-ex/react';

import '@ds-ex/scss/lib/Utilities.css';

ReactDOM.render(
  <>
    <Color hexCode="#FF00FF" />
  </>,
  document.querySelector('#root')
);
