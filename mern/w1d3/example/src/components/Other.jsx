import React from "react";


class Other extends React.Component {

    constructor(props){
        super(props);

    }

    render () {
        return (
            <div>
                <marquee behavior="" direction="">This is super oldschool!!!!</marquee>
                <h5>Hello I am another component!</h5>
                <h5>And the number is {this.props.count}</h5>
                <button onClick={this.props.countHandler} >Click me to add!</button>
                <hr />
            </div>
        )
    }
}

export default Other;