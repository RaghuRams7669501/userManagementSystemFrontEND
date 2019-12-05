import React from 'react';
import ReactDOM from 'react-dom';

import Cams from './app/containers/Cams';

const oauth2EndPoint = document.getElementById('cams').getAttribute('oauth2EndPoint');

ReactDOM.render(
  <Cams  oauth2EndPoint={oauth2EndPoint} 
  />,
    document.getElementById('cams')
);
