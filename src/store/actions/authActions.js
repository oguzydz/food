import * as Actions from './actionTypes';



export const check_auth = () => async dispatch => {
    dispatch({
        type: Actions.CHECK_AUTH,
    })
}


export const signin = (user) => async dispatch => {

    dispatch({
        type: Actions.SIGN_IN,
        payload: user
    })
}


export const logout = () => async dispatch => {
    dispatch({
        type: Actions.LOGOUT,
    })
}