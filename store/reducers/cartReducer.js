import * as actionTypes from '../actions/types';

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      let newList;
      const itm = state.items.find(i => i._id === action.payload._id);
      if (itm) {
        itm.quantity = itm.quantity + 1;
        newList = state.items.map(i => (i._id === itm._id ? itm : i));
      } else {
        newList = [...state.items, action.payload];
      }

      return {
        ...state,
        items: newList,
      };
    }
    case actionTypes.REMOVE_ONE: {
      let newList;
      const itm = state.items.find(i => i._id === action.payload._id);
      if (itm) {
        itm.quantity = itm.quantity - 1;
        newList = state.items.map(i => (i._id === itm._id ? itm : i));
      } else {
        newList = [...state.items, action.payload];
      }

      return {
        ...state,
        items: newList,
      };
    }

    case actionTypes.REMOVE_FROM_CART: {
      let newList = state.items.filter(item => item._id !== action.payload._id);

      return {
        ...state,
        items: newList,
      };
    }
    case actionTypes.CLEAR_CART: {
      return {
        ...state,
        items: [],
      };
    }
    case actionTypes.CHECKOUT: {
      return {
        ...state,
        items: [],
      };
    }
    case actionTypes.FETCH_CART: {
      return {
        ...state,
        items: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
