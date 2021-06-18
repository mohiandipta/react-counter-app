import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 3,
        imageURL: 'https://picsum.photos/200/',
        tags: ['teg1', 'teg2', 'teg3', 'teg4'],
    };

    style = {
        fontSize: '20px',
        fontWeight: 'bold',
        color: "DodgerBlue"
    }

    //conditional rendering 
    renderTags() {
        if (this.state.tags.length == 0) {
            return <p>"There are no tags"</p>
        }
        else {
            return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        }
    }

    render() {
        return (
            <React.Fragment>
                <img src={this.state.imageURL} alt="" />
                <span className={this.getBadgeClasses()} style={this.style} >{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-success btn-sm">Increment</button>
                {this.renderTags()}
            </React.Fragment >

        );
    }


    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
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