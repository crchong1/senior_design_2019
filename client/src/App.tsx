import { hot } from 'react-hot-loader/root';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './static/styles/App.scss';
import OrganizationSignup from './components/OrganizationSignup';
import ClientSignup from './components/ClientSignup';
import Header from './components/Header';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Header />
      <h1></h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/organization-signup">
            <OrganizationSignup />
          </Route>
          <Route path="/client-signup">
            <ClientSignup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default hot(App);
