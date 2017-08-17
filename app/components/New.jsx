import React from 'react'

class New extends React.Component{
    constructor() {
        super()
    }

render () {
    return (
        <div className="row" id="newForm"> 
                    <form action="/" method="POST" className="text-center">
                            
                                <div className="large-4 large-centered columns">
                                    <h3 className="text-center" >List New Item!</h3>
                                    <label for="titleInput" className="right inline">Title </label>
                                    <input type="text" placeholder="enter title" name="title" ref="title" id="titleInput"/>
                                
                                    <label for="descriptionInput" className="right inline">Description </label>
                                    <input type="text" placeholder="description" name="description" ref="description" id="descriptionInput"/>

                                    <label for="locationInput" className="right inline">Location </label>
                                    <input type="text" placeholder="location" name="location" ref="location" id="locationInput"/>
                                    <button className="button expanded">Submit</button>
        
                            </div>        
                    </form>
        </div>
        );
    }   
}

module.exports = New;