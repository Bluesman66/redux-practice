import React, { Component } from 'react';
import { connect } from 'react-redux';
import './assets/styles/style.scss';
import Messages from './messages';
import Users from './users';

class Chat extends Component {
    render() {
        return (
            <main className="main-wrapper">
                <Messages />
                <Users users={this.props.users} addNewUser={this.props.addNewUser} />
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