import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import './App.css'
import SignOut from './SignOut/SignOut';

const App = () => {

  return(
    <Router>
      <div>
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/SignIn'} component={SignIn} />
        <Route path={process.env.PUBLIC_URL + '/SignOut'} component={SignOut} />
        <Route exact path={process.env.PUBLIC_URL + '/'}  render={() => <Redirect to="/SignIn" />} />
      </Switch>
      </div>
    </Router>
  );    
}

export default App;