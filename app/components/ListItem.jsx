import React from "react"


class ListItem extends React.Component {
    constructor(props) {
        super();
    }
    render () {
        return (
            <div>
                <p> hello {this.props.name} </p>
            </div>
        )
    }
}


module.exports = ListItem;

