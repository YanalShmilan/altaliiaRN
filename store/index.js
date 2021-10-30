import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import {fetchCart} from './actions/cartActions';
import cartReducer from './reducers/cartReducer';
import categoreisReducer from './reducers/categoriesReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  categoreis: categoreisReducer,
  cart: cartReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchCart());

export default store;
