import React from 'react';
import './App.css';
import Main from "./Components/Main";
import Header from "./Components/Header";
import Employees from "./Components/Employes";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App({location}) {
  return (
      <div className="App">
        <Router>
          <Header/>
          <Switch location={location}>
            <Route exact path='/' component={Main}/>
            <Route path='/employees' component={Employees}/>
          </Switch>
        </Router>
      </div>
  );
}
export default App;
