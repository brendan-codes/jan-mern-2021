import React from "react";
import Other from "../components/Other";


class Counter extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }

    countHandler = event => {
        console.log("What?")
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <Other count={this.state.count} countHandler={this.countHandler}/>
                <Other count={this.state.count} countHandler={this.countHandler}/>
                <Other count={this.state.count} countHandler={this.countHandler}/>
                <Other count={this.state.count} countHandler={this.countHandler}/>
                <Other count={this.state.count} countHandler={this.countHandler}/>
            </div>
        )
    }
}

export default Counter;