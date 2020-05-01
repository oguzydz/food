import * as Actions from './actionTypes';


export const add_price = (price) => async dispatch => {
    dispatch({
        type: Actions.ADD_PRICE,
        payload: price
    })
}

export const remove_price = (price) => dispatch => {
    dispatch({
        type: Actions.REMOVE_PRICE,
        payload: price
    })

}

export const reset_price = () => {
    return {
        type: Actions.RESET_PRICE
    }
}


export const add_cart = (product) => async dispatch => {
    dispatch({
        type: Actions.ADD_CART,
        payload: product
    })
}

export const remove_cart = (product) => {
    return {
        type: Actions.REMOVE_CART,
        payload: product
    }
}

export const remove_cart_length = dispatch => {
   return {
       type: Actions.REMOVE_CART_LENGTH
   }
}