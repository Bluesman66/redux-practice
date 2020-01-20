import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Chat from './chat';
import rootReducer from './reducers';

const store = createStore(rootReducer);
window.store = store;
// store.subscribe(() => {
//     console.debug('the store has been changed!');
// })

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Chat />
                </div>
            </Provider>
        )
    }
}

