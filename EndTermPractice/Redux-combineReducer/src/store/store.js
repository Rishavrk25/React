import {createStore , combineReducers} from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

const reducer = combineReducers({
  user : userReducer,
  cart : cartReducer
})

const store = createStore(reducer);

export default store;

