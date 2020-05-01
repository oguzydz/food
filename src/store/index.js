import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import counterReducer from './reducers/counterReducer';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    cart: cartReducer,
    auth: authReducer,
})


let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;