import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './Dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
