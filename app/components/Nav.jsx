const React =  require("react");
var {Link} = require("react-router");

var Nav = React.createClass({
    componentDidMount: function () {
        $(document).foundation();
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text"><span className="icon"> Letgo</span></li>
                        <li>
                        <form> 
                            <ul className="menu">
                               <li>  
                                   <div className="searchBox">
                                       
                                        <input type="text" placeholder="Search for Bike near you" id="searchBox"  />
                                    </div>        
                                </li>                       
                                <li>    
                                    <div className="cityBox">
                                        <input type="text" placeholder="Enter City or Zip Code" id="searchBox"  />
                                    </div>
                                </li>
                            </ul>
                        
                            </form>
                         </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu text-center">
                        <li><a href="#" className="button round">Log In</a></li>
                        <li><Link to="/new" > Sell Your Stuff <i className="fa fa-camera-retro fa-lg inverted"></i> </Link></li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = Nav;