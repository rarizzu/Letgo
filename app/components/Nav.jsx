const React =  require("react");
var {Link} = require("react-router");

var Nav = React.createClass({
    render: function () {
        return (
                <ul className="dropdown menu" data-dropdown-menu>
                        <li>
                                <a href="#">Item 1</a>
                                <ul className="menu">
                                <li><a href="#">Item 1A</a></li>
                            
                                </ul>
                        </li>
                            <li><a href="#">Item 2</a></li>
                            <li><a href="#">Item 3</a></li>
                            <li><a href="#">Item 4</a></li>
                </ul>
        )
    }
});

module.exports = Nav;