import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const usersState = ['@john_123', '@alex_1966', '@chris'];
const reducer = (state = usersState, action) => {
    return state;
};
const store = createStore(reducer);
window.store = store;

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>Hi again!</div>
            </Provider>
        )
    }
}

