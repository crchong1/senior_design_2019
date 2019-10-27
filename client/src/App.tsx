import React from 'react';
import { 
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import './static/styles/App.scss';
import OrganizationSignup from './components/OrganizationSignup';
import ClientSignup from './components/ClientSignup';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
      	<Switch>
      		<Route exact path="/">
      			<Login />
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

export default App;
