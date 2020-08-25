import React, { Component } from 'react';
import './App.scss';
import Main from './modules/Main/Main';
import Registration from './modules/Registration/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
class App extends Component {
  render(){
    return (
          <Router>
            <Switch>
        
          <Route exact path="/">
            <Registration />
          </Route>
          <Route exact path="/youtube-studio">
           <Main />
          </Route>
        </Switch>
          </Router>
    )
  }
}

export default App;


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}