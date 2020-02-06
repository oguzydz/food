import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import counterReducer from './reducers/counterReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    cart: cartReducer
})


let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;