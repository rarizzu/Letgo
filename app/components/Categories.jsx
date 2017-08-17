const React = require("react");


var Categories = React.createClass({
    
    render: function () {
        return (
            <div className="row">
                    <div className="inner" id="side-bar">
                    <p> Categories</p>
                    <hr />
                        <ul className="side-nav">
                            <li><a href="#">Fashion and Accesories</a></li>
                            <li><a href="#">Home and Garden</a></li>
                            <li><a href="#">Electronics</a></li>
                            <li><a href="#">Baby and Child</a></li>
                            <li><a href="#">Sports, Leisure and Games</a></li>
                            <li><a href="#">Other Vehicles and Parts</a></li>
                            <li><a href="#">Movies, Books and Music</a></li>
                            <li><a href="#">Cars</a></li>
                            <li><a href="#">Other</a></li>
                        </ul>

                        <p> Top Cities</p>
                        <hr />
                        <ul className="side-nav">
                            <li><a href="#">Chicago</a></li>
                            <li><a href="#">New York</a></li>
                            <li><a href="#">Boston</a></li>
                            <li><a href="#">Miami</a></li>
                            <li><a href="#">Washington D.C.</a></li>
                            <li><a href="#">Oakland</a></li>
                        </ul>
                    </div>              
                
            </div>
        )
    }
});


module.exports = Categories;