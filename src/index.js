import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function WrappedApp() {
  return (
    <App />
  );
}

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
