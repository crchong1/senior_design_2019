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
import DocViewer from './components/DocViewer';

interface State {
  isLoggedIn : boolean,
}

class App extends React.Component<{}, State, {}> {
  logIn() {
    console.log('Log In');
    this.setState({ isLoggedIn: true });
  }

  logOut() {
    console.log('Log Out');
    this.setState({ isLoggedIn: false });
  }

  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    console.log('New');
  }

  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} logIn={this.logIn} logOut={this.logOut} />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                this.state.isLoggedIn === true
                  ? <Redirect to="/home" />
                  : <Redirect to="/login" />
              )}
            />

            <Route
              path="/login"
              render={() => (
                this.state.isLoggedIn === true
                  ? <Redirect to="/home" />
                  : <Login />
              )}
            />
            <Route path="/organization-signup">
              <OrganizationSignup />
            </Route>

            <Route
              path="/home"
              render={() => (
                this.state.isLoggedIn === true
                  ? <Landing />
                  : <Redirect to="/login" />
              )}
            />
            <Route path="/client-signup">
              <ClientSignup />
            </Route>
            <Route path="/worker-signup">
              <WorkerSignup />
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
            <Route path="/docviewer">
                <DocViewer/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
