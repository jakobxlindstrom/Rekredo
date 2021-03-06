import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

import { BASE_URL } from '../utils/config';

export const cart = createSlice({
  name: 'cart',
  initialState: {
    cartList: [],
    orderSuccess: null,
  },
  reducers: {
    setCart: (store, action) => {
      const itemNotInCart =
        store.cartList.filter((item) => item._id === action.payload._id)
          .length === 0;
      if (itemNotInCart) {
        store.cartList.push(action.payload);
      }
    },
    deleteOneFromCart: (store, action) => {
      const itemsToSave = store.cartList.filter(
        (item) => item._id !== action.payload._id
      );
      store.cartList = itemsToSave;
    },
    emptyCart: (store, action) => {
      store.cartList = [];
    },
    setOrderSuccess: (store, action) => {
      store.orderSuccess = action.payload;
    },
  },
});

export const sendOrder = (myCart, accessToken) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(BASE_URL + '/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({ cart: myCart }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          dispatch(cart.actions.emptyCart());
          dispatch(cart.actions.setOrderSuccess(true));

          // dispatch(upload.actions.setProductError(null));
          // dispatch(upload.actions.setProduct(json));
          // dispatch(upload.actions.clearImageState());
          // clearForm();
        } else {
          dispatch(cart.actions.setOrderSuccess(false));
          // dispatch(upload.actions.setProductError(json.response));
        }
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};
