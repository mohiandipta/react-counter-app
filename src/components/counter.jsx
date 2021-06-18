import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
        imageURL: 'https://picsum.photos/200/'
    };
    render() {
        return (
            <React.Fragment>
                <Badge variant="primary">
                    <span style={{ color: "DodgerBlue" }} >{this.formatCount()}</span>
                </Badge>
                <button>Increment</button>
            </React.Fragment >

        );
    }


    formatCount() {
        const { count } = this.state
        return count === 0 ? "Zero" : count;
    };
}


export default Counter;