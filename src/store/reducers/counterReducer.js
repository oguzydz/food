import * as Actions from '../actions/actionTypes';

const initalState = {
    price: 0,
}


const counterReducer = (state = initalState, action) => {
    switch (action.type) {
        case Actions.ADD_PRICE:
            return {
                price: state.price + action.payload
            };
        case Actions.REMOVE_PRICE:
            return {
                price: state.price - action.payload
            };
        case Actions.RESET_PRICE:
            return {
                price: 0
            };
    }
    return state;
}

export default counterReducer;