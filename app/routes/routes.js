import React from 'react';
import { Route, IndexRoute, Router } from 'react-router';
import Main from "Main";
import Home from "Home";
import About from "About";
import Results from "Results";
import New from "New";

// var Main = require("Main");
// var Home = require("Home");


//these are the react router routes
export default (
    <Route path="/" component={Main}  > 
        <Route path="about" component={About} />
        <Route path="new" component={New} />
        <IndexRoute component={Results} />
    </Route>
);

