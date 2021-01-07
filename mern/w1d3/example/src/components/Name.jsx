import React from "react";

class Name extends React.Component {


    constructor(props){
        super(props);

        this.state = {
            name: "Brendan"
        }
    }


    render () {
        return (
            <>
                <h3>I am the name component and I do stuff!</h3>
            </>
        )
    }
}


export default Name;