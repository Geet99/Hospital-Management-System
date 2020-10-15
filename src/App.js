import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin'
// import Routes from './Routes';
// import PatientLogin from './components/patientLogin'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavigationBar />
        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/patientLogin" component={PatientLogin} />
        </Switch> */}
        <div className="App">
          <Home />
          {/* <Admin /> */}
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;