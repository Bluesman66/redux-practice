import React, { Component } from 'react';
import { connect } from 'react-redux';
import faker from 'faker';
import './assets/styles/style.scss';

class Chat extends Component {

    render() {
        const rndUserName = `@${faker.internet.userName().toLowerCase()}`;
        return (
            <main className="main-wrapper">
                <div className="chat">
                    <p className="message">
                        <span className="message__date">09/02 12:20</span>
                        <span className="message__author">John: </span>
                        <span>Hello World!</span>
                    </p>

                    <p className="message">
                        <span className="message__date">09/02 12:20</span>
                        <span className="message__author">Alex: </span>
                        <span>What's up bro?</span>
                    </p>

                    <input type="text" className="chat__input"></input>
                </div>

                <div className="users">
                    <h3 className="users__title">Online users:</h3>

                    <ul>
                        <li>John</li>
                        <li>Alex</li>
                    </ul>
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addNewUser: (username) => dispatch({ type: 'ADD_NEW_USER', username })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat)