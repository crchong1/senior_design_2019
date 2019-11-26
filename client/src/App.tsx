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
import ClientLanding from './components/ClientLanding';
import Login from './components/Login';
import Print from './components/Print';
import Request from './components/Request';
import SeeDocs from './components/SeeDocs';
import Applications from './components/Applications';
import Email from './components/Email';
import AdminLanding from './components/AdminLanding';
import DocViewer from './components/DocViewer';

interface State {
  userType: userType
}

enum userType {
  headAdmin, //can delete admin and create admin
  admin,
  worker,
  volunteer,
  client,
  loggedOut
}

class App extends React.Component<{}, State, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userType: userType.loggedOut
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn() {
    this.setState({ userType: userType.client });
  }

  logOut() {
    this.setState({ userType: userType.loggedOut });
  }

  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.userType !== userType.loggedOut} logIn={this.logIn} logOut={this.logOut} />
        <Router>
          <Switch>
            // Home/Login Components
            <Route
              exact
              path="/"
              render={() => (
                this.state.userType !== userType.loggedOut
                  ? <Redirect to="/home" />
                  : <Redirect to="/login" />
              )}
            />
            <Route
              path="/home"
              render={() => {
                if (this.state.userType === userType.admin || this.state.userType === userType.headAdmin) {
                  return(<AdminLanding />)
                }  else if (this.state.userType === userType.client) {
                  return(<ClientLanding />)
                } else {
                  return(<Redirect to="/login"/>);
                }
              }}
            />
            <Route
              path="/login"
              render={() => (
                this.state.userType !== userType.loggedOut
                  ? <Redirect to="/home" />
                  : <Login />
              )}
            />
            // Signup Components
            <Route path="/organization-signup">
              <OrganizationSignup />
            </Route>
            <Route path="/client-signup"
              render={() =>  (
                (this.state.userType === userType.headAdmin || this.state.userType === userType.admin || this.state.userType === userType.worker)
                  ? <ClientSignup /> 
                  : <Redirect to="/"/>
              )}
            />
              
            <Route path="/worker-signup"
              render={() => (
                (this.state.userType === userType.headAdmin || this.state.userType === userType.admin)
                  ? <WorkerSignup />
                  : <Redirect to ="/"/>
              )}
            />
            // Client Components
            <Route path="/see-my-docs">
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
            <Route path="/doc-viewer">
              <DocViewer />
            </Route>
            // Component
            <Route>
              <Redirect to="/"/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
