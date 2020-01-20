import React, { Component } from 'react'

export default class Messages extends Component {
    render() {
        return (
            <div className="chat">
                {this.props.messages.map(msg => {
                    const d = new Date(msg.datetime);
                    return (
                        <p key={msg.datetime} className="message">
                            <span className="message__date">{`${d.getDate()}/${d.getMonth() + 1} ${d.getHours()}:${d.getMinutes()}`}</span>
                            <span className="message__author">{msg.author}: </span>
                            <span>{msg.text}</span>
                        </p>
                    )
                })}

                <input type="text" className="chat__input"></input>
            </div>
        )
    }
}
