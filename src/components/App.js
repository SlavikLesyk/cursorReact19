import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import './App.css'
import SignOut from './SignOut/SignOut';

const App = () => {

  return(
    <Router>
      <div>
      <Switch>
        <Route path='/SignIn' component={SignIn} />
        <Route path='/SignOut' component={SignOut} />
        <Route exact path='/'  render={() => <Redirect to="/SignIn" />} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;