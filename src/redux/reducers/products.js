import { combineReducers } from 'redux';
import { RECEIVE_FULL_PRODUCTS, SORT_DESC, SORT_ASC, RECEIVE_PIZZA_PRODUCTS, RECEIVE_STEAK_PRODUCTS } from '../actions/products';
import _ from 'underscore';

function getFullProducts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_FULL_PRODUCTS:
      return {
        ...state,
        products: (state && state.products) ? state.products.concat(action.products.data) : action.products.data
      };
    default:
      return state;
  }
}

function getPizzaProducts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PIZZA_PRODUCTS:
      return {
        ...state,
        products: (state && state.products) ? state.products.concat(action.products.data) : action.products.data
      };
    default:
      return state;
  }
}

function getSteakProducts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_STEAK_PRODUCTS:
      return {
        ...state,
        products: (state && state.products) ? state.products.concat(action.products.data) : action.products.data
      };
    default:
      return state;
  }
}

function sortAsc(state = {}, action) {
   switch (action.type) {
     case SORT_ASC:
       return {
         ...state,
         products: (state && state.products) ?  _.sortBy(state.products, 'name') : state.products
       };
     default:
       return state;
   }
 }

 function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export function getProduct(state, id) {
  
  let allProducts = [];

  if(!isEmpty(state.getFullProducts)) {
    allProducts = state.getFullProducts.products
  }

  if(!isEmpty(state.getPizzaProducts)) {
    allProducts = allProducts.concat(state.getPizzaProducts.products)
  }

  if(!isEmpty(state.getSteakProducts)) {
    allProducts = allProducts.concat(state.getSteakProducts.products)
  }

  const foundProduct = allProducts.find((item) => {
    return item.id === Number(id)
  });

  console.info('foundProduct: ', foundProduct)
 
  return foundProduct;
}

export default combineReducers({
  getPizzaProducts,
  getSteakProducts,
  getFullProducts,
  sortAsc,
});
