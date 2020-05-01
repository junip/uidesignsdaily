import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div className="">
    <span role="img" aria-label="parcel">📦</span>
  </div>
);

render(<App />, document.getElementById('root'));
