import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import login from "./components/Login/LoginPage";
import watchlist from "./components/Watchlist/Watchlist";
//import NavBar from "./components/NavBar/NavBar";
import subscription from "./components/Subscription/Subscription";
class App extends Component {
    render() {
    return (
        <BrowserRouter >
          <div>
      <Switch >
          <Route path="/" component={login} exact />
          <Route path="/login" component={login} />
          <Route path="/watchlist" component={watchlist} />
          <Route path="/subscription" component={subscription} />
             </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
