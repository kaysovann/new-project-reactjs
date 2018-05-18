import React from 'react';

import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.scss';
import './App.scss';
// import App from './App';
import Dashboard from './dashboard/Dashboard';
import registerServiceWorker from './registerServiceWorker';


const indexRoutes = [{ path: '/', name: 'Home', component: Dashboard }];

ReactDOM.render(
  <HashRouter>
    <Switch>
      {indexRoutes.map((prop, key) => { // eslint-disable-line
        return <Route to={prop.path} component={prop.component} key={key} />; // eslint-disable-line
      })}
    </Switch>
  </HashRouter>,
  document.getElementById('root') // eslint-disable-line
);
registerServiceWorker();
