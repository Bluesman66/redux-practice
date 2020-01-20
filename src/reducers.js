const usersState = ['@john_123', '@alex_1966', '@chris'];

const reducer = (state = usersState, action) => {
    if (action.type === 'ADD_NEW_USER') {
        return state.concat(action.username)
    }
    return state;
};

export default reducer;