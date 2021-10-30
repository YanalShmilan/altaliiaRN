import * as actionTypes from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import books from '../../books';

export const fetchCart = () => {
  return async dispatch => {
    try {
      let value = await AsyncStorage.getItem('cartItems');
      if (!value) {
        value = [];
      } else {
        value = JSON.parse(value);
      }
      dispatch({
        type: actionTypes.FETCH_CART,
        payload: value,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = item => {
  return async dispatch => {
    try {
      let value = await AsyncStorage.getItem('cartItems');
      value !== null ? (value = JSON.parse(value)) : (value = []);
      if (value.find(i => i._id === item._id)) {
        value = value.map(i =>
          i._id === item._id
            ? {
                _id: item._id,
                title: item.title,
                image: item.image,
                quantity: item.quantity + 1,
                price: item.price,
              }
            : i,
        );
      } else {
        value = [...value, item];
      }
      value = JSON.stringify(value);
      await AsyncStorage.setItem('cartItems', value);

      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: item,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const removeOne = item => {
  return async dispatch => {
    try {
      let value = await AsyncStorage.getItem('cartItems');
      value !== null ? (value = JSON.parse(value)) : (value = []);
      if (value.find(i => i._id === item._id)) {
        value = value.map(i =>
          i._id === item._id
            ? {
                _id: item._id,
                title: item.title,
                image: item.image,
                quantity: item.quantity - 1,
                price: item.price,
              }
            : i,
        );
      } else {
        value = [...value, item];
      }
      value = JSON.stringify(value);
      await AsyncStorage.setItem('cartItems', value);

      dispatch({
        type: actionTypes.REMOVE_ONE,
        payload: item,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFromCart = item => {
  return async dispatch => {
    try {
      let value = await AsyncStorage.getItem('cartItems');
      value !== null ? (value = JSON.parse(value)) : (value = []);
      value = value.filter(i => i._id !== item._id);
      value = JSON.stringify(value);
      await AsyncStorage.setItem('cartItems', value);

      dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: item,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const clearCart = () => {
  return async dispatch => {
    try {
      const value = JSON.stringify([]);

      await AsyncStorage.setItem('cartItems', value);

      dispatch({
        type: actionTypes.CLEAR_CART,
        payload: [],
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// export const checkout = order => {
//   return async dispatch => {
//     try {
//       order = order.map(o => ({itemId: o.id, quantity: o.quantity}));
//       const check = await instance.post('/checkout', order);
//       const value = JSON.stringify([]);

//       await AsyncStorage.setItem('cartItems', value);

//       dispatch({
//         type: actionTypes.CHECKOUT,
//         payload: [],
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
