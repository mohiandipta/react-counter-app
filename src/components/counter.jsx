import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
        imageURL: 'https://picsum.photos/200/'
    };

    style = {
        fontSize: '20px',
        fontWeight: 'bold',
        color: "DodgerBlue"
    }

    render() {
        return (
            <React.Fragment>
                <img src={this.state.imageURL} alt="" />
                <span className="badge alert m-2" style={this.style} >{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment >

        );
    }


    formatCount() {
        const { count } = this.state
        return count === 0 ? "Zero" : count;
    };
}


export default Counter;