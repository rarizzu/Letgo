var React = require('react');
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, browserHistory, hashHistory, HashRouter} = require("react-router");
var Main = require("Main");
var Home = require("Home");
var Results = require("Results");
var About = require("About");
import routes from 'routes';

$(document).foundation();

require('style!css!sass!applicationStyles')




ReactDOM.render(
        <Router history={browserHistory} routes={routes} />,    
        document.getElementById('app')
    );