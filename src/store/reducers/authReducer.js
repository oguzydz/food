import * as Actions from '../actions/actionTypes';

const initalState = {
    auth: false,
    user: {},
}


const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case Actions.SIGN_IN:
            return {
                auth: true,
                user: action.payload
            };
        case Actions.LOGOUT:
            return {
                auth: false,
                user: null
            }
    }
    return state;
}

export default authReducer;