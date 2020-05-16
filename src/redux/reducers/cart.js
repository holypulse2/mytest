import { combineReducers } from 'redux';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../actions/cart';

const initialState = {
  quantityById: {}
};

function quantityById(state = initialState.quantityById, action) {
  const { productId } = action;
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      };
    case REMOVE_FROM_CART:
      const copy = {...state};
      delete copy[productId];

      return copy;
    default:
      return state;
  }
}

export default combineReducers({
  quantityById
});

export function getQuantity(state, productId) {
  return state.quantityById[productId] || 0;
}

export function getAddedIds(state) {
  return Object.keys(state.quantityById);
}
