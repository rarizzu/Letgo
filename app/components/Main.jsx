const React = require("react");
const Nav = require("Nav");
const Categories = require("Categories");

var Main = (props) => {
        return (
            <div>
                <Nav />
                <div className="large-3 medium-4 small-6 columns"> 
                    <Categories />
                </div>
               <div className="large-9 columns">
                    {props.children}
               </div>
               
            </div>
        )
    };


module.exports = Main;