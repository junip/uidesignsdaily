import React from 'react';
import { render } from 'react-dom';
import './app.scss';
import ShareLink from './components/sharelink';

const App = () => (
  <div className="ui-daily">
    <ShareLink />
  </div>
);

render(<App />, document.getElementById('root'));
