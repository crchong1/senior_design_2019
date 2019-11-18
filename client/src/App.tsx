import { hot } from 'react-hot-loader/root';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './static/styles/App.scss';
import EULA from './static/eula.json';
import ClientSignup from './components/ClientSignup';
import WorkerSignup from './components/WorkerSignup';
import OrganizationSignup from './components/OrganizationSignup';
import Header from './components/Header';
import Landing from './components/Landing';
import Login from './components/Login';
import Print from './components/Print';
import Request from './components/Request';
import OrganizationReview from './components/OrganizationReview';
import AdminLanding from './components/AdminLanding';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/eula">
            {EULA[0]}
          </Route>
          <Route path="/client-signup">
            <ClientSignup />
          </Route>
          <Route path="/worker-signup">
            <WorkerSignup />
          </Route>
          <Route path="/organization-signup">
            <OrganizationSignup />
          </Route>
          <Route path="/organization-review">
          <OrganizationReview />
        </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/print">
            <Print />
          </Route>
          <Route path="/admin-landing">
            <AdminLanding />
          </Route>
          <Route path="/request">
            <Request />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default hot(App);
