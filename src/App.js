import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/Nav';
import Home from './components/Home';
import Patient from './components/Patient';
import Staff from './components/Staff';
import Admin from './components/Admin'
import StaffSignUp from './components/StaffSignUp'
import PatientSignUp from './components/PatientSignUp'
import About from './components/About'
import Charity from './components/Charity'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Admin" component={Admin} />
          <Route path="/Patient" component={Patient} />
          <Route path="/Staff" component={Staff} />
          <Route path="/signup/staff" component={StaffSignUp} />
          <Route path="/signup/patient" component={PatientSignUp} />
          <Route path="/About" component={About} />
          <Route path="/Charity" component={Charity} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;