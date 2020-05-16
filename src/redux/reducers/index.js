import { combineReducers } from 'redux';
import { default as products, getProduct } from './products';
import { default as cart, getQuantity, getAddedIds } from './cart';

export function getTotal(state) {
    return getAddedIds(state.cart).reduce((total, id) =>
      total + getProduct(state.products, id).abv * getQuantity(state.cart, id),
      0
    ).toFixed(2)
  }
  
  export function getCartProducts(state) {
    return getAddedIds(state.cart).map(id => ({
      ...getProduct(state.products, id),
      quantity: getQuantity(state.cart, id)
    }))
  }

const rootReducer = combineReducers({
    cart,
    products,
})

export default function root(state, action) {

return rootReducer(state, action)
}
