import React, { Component } from 'react'

export default class Messages extends Component {
    render() {
        return (
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
        )
    }
}
