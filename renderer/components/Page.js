import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { counterStore } from '../models/Counter';

class Page extends Component {
    render() {
        return (
            <Provider counter={counterStore}>
                { this.props.children }
            </Provider>
        );
    }
}

export default Page;