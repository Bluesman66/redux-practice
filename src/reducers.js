import { combineReducers } from 'redux';

const usersState = ['@john_123', '@alex_1966', '@chris'];
const messagesState = [
    {
        text: 'Hello, Chris!',
        datetime: 1579506533929,
        author: '@alex_1966'
    },
    {
        text: 'Hi, Alex!',
        datetime: 1579506592677,
        author: '@chris'
    }
]

const usersReducer = (state = usersState, action) => {
    if (action.type === 'ADD_NEW_USER') {
        return state.concat(action.username)
    }
    return state;
};

const messagesReducer = (state = messagesState, action) => {
    if (action.type === 'ADD_NEW_MESSAGE') {
        return state.concat({
            author: action.author,
            text: action.text,
            datetime: action.datetime
        })
    }
    return state;
};

export default combineReducers({
    usersReducer,
    messagesReducer
});