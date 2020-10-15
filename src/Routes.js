import React, { Component } from "react";
// import { Router, Switch, Route, browserHistory } from "react-router-dom";
import { Router, Switch, Route } from "react-router";

import Home from "./components/Home";
import history from './history';
import Admin from "./components/Admin";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                {/* <Switch> */}
                    <Route path="/" component={Home} />
                    <Route path="Admin" component={Admin} />
                {/* </Switch> */}
            </Router>
        )
    }
}