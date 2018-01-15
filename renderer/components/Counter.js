import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

class Counter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.counter.decrement}>-</button>
                { this.props.counter.value }
                <button onClick={this.props.counter.increment}>+</button>
            
                <style jsx>{`
                    button {
                        margin: 5px;
                    }
                `}</style>
            </div>
        );
    }
}

export default inject('counter')(observer(Counter));