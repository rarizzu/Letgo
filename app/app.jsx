var React = require('react');
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("Main");







$(document).foundation();

require('style!css!sass!applicationStyles')




ReactDOM.render(
        <Router>
            <Route path="/" component={Main} />
        </Router>,
        document.getElementById('app')
    );