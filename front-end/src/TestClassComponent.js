import React, {Component} from "react";

export default class TestClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Nick",
            visibility: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            visibility: !state.visibility
        }))
    }

    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <h1>Test Class Component {this.state.name}</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Test Class Component {this.state.name}</h1>
                    <button onClick={this.handleClick}>Click here</button>
                </div>
            )
        }
    }

}