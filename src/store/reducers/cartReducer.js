import * as Actions from '../actions/actionTypes';
import { data } from '../../components/products';



const initalState = {
    cart: data.map(item => {
        return {
            id: item.id,
            length: 0
        }
    }),
    selects: data.map(item => {
        return {
            id: item.id,
            isSelected: false
        }
    }),
}

const cartReducer = (state = initalState, action) => {
    switch (action.type) {
        case Actions.ADD_CART:
            return {
                cart: state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            id: item.id,
                            length: item.length + 1
                        }
                    } else {
                        return item;
                    }
                })
            }
        case Actions.REMOVE_CART:
            return {
                cart: state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            id: item.id,
                            length: item.length - 1
                        }
                    } else {
                        return item;
                    }
                })
            };
        case Actions.REMOVE_CART_LENGTH: {
            return {
                cart: state.cart.map(item => {
                    return {
                        id: item.id,
                        length: 0
                    }
                })
            }
        }
    }
    return state;
}

export default cartReducer;