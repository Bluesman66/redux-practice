import React, { Component } from 'react';
import { connect } from 'react-redux';
import faker from 'faker';

class Chat extends Component {

    render() {
        const rndUserName = `@${faker.internet.userName().toLowerCase()}`;
        return (
            <div>
                <h3>Chat</h3>
                <button onClick={() => this.props.addNewUser(rndUserName)}>
                    Add New User
                </button>
                <hr />
                {this.props.users.map(user => {
                    return <p key={user}>{user}</p>
                })}
            </div>
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