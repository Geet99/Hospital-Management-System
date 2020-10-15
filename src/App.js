// import React from 'react';
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
// import { NavigationBar } from './components/Nav';
// // import { BrowserRouter } from 'react-router-dom';
// import Routes from './Routes';
// import Home from "./components/Home";
// import history from './history';
// import Admin from "./components/Admin";
// import Patient from "./components/Patient";
// import { render } from '@testing-library/react';

// class App extends React.Component {

//   render() {
//     return (
//       <React.Fragment>
//         <BrowserRouter>
//         <div>
//       <NavigationBar />
//       <Patient />
//       </div>
//           {/* <NavigationBar />
//           <Patient /> */}
//           {/* <Router history={history}>
//             <Switch>
//                 <Route path={"/"} component={Home} />
//                 <Route path={"Admin"} component={Admin} />
//             </Switch>
//           </Router> */}
//         </BrowserRouter>
//       </React.Fragment>
//     );
//   }
// }

// // render(<App />, window.document.getElementById('app'));
// export default App;

import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/Nav';
// import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Patient from './components/Patient';
import Staff from './components/Staff';
import Admin from './components/Admin'
// import Routes from './Routes';
// import PatientLogin from './components/patientLogin'

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
        </Switch>
        {/* <div className="App">
          <Patient />
          <Admin />
        </div> */}
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;