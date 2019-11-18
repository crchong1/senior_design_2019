import { hot } from 'react-hot-loader/root';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './static/styles/App.scss';
import ClientSignup from './components/ClientSignup';
import WorkerSignup from './components/WorkerSignup';
import OrganizationSignup from './components/OrganizationSignup';
import Header from './components/Header';
import Landing from './components/Landing';
import Login from './components/Login';
import Print from './components/Print';
import Request from './components/Request';
import SeeDocs from './components/SeeDocs';
import Applications from './components/Applications';
import Email from './components/Email';
import AdminLanding from './components/AdminLanding';

interface State {
  loggedIn : boolean,
}

// const LoggedInRoute = ({component: (React.Component), ...rest}) => (
//   <Route {...rest} render={(props) => (
//     this.state.loggedIn === true ?
//     <React.Component component={component} {...props} /> :
//     <Redirect to="/login" />
//   )} />
// );

class App extends React.Component<{}, State, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/client-signup">
              <ClientSignup />
            </Route>
            <Route path="/worker-signup">
              <WorkerSignup />
            </Route>
            <Route component={OrganizationSignup} path="/organization-signup" />
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/seemydocs">
              <SeeDocs />
            </Route>
            <Route path="/applications">
              <Applications />
            </Route>
            <Route path="/print">
              <Print />
            </Route>
            <Route path="/request">
              <Request />
            </Route>
            <Route path="/email">
                <Email />
            </Route>
            <Route path="/adminlanding">
                <AdminLanding />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default hot(App);
