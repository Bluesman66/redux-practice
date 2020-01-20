import React, { Component } from 'react'

export default class Messages extends Component {
    submitForm(e) {
        e.preventDefault();
        this.props.newMessage('@alex_1966', this.input.value, Date.now());
        this.input.value = '';
    }

    render() {
        return (
            <div className="chat">
                <form onSubmit={this.submitForm.bind(this)} action="#">

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

                    <input ref={(element) => this.input = element} type="text" className="chat__input"></input>
                </form>
            </div>
        )
    }
}
