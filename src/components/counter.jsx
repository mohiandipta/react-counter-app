import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 3,
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
                <span className={this.getBadgeClasses()} style={this.style} >{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment >

        );
    }


    getBadgeClasses() {
        let classes = "badge m-2 alert-";
        classes += (this.state.count) === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state
        return count === 0 ? "Zero" : count;
    };
}


export default Counter;