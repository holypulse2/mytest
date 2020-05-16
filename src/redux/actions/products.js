export const GET_FULL_PRODUCTS = 'GET_FULL_PRODUCTS';
export const RECEIVE_FULL_PRODUCTS = 'RECEIVE_FULL_PRODUCTS';

export const GET_PIZZA_PRODUCTS = 'GET_PIZZA_PRODUCTS';
export const RECEIVE_PIZZA_PRODUCTS = 'RECEIVE_PIZZA_PRODUCTS';

export const GET_STEAK_PRODUCTS = 'GET_STEAK_PRODUCTS';
export const RECEIVE_STEAK_PRODUCTS = 'RECEIVE_STEAK_PRODUCTS';

export const SORT_ASC = 'SORT_ASC';
export const SORT_DESC = 'SORT_DESC';

export function getFullProducts(pageNumber) {
  return {
    type: GET_FULL_PRODUCTS,
    pageNumber,
  };
}

export function receiveFullProducts(products) {
  return {
    type: RECEIVE_FULL_PRODUCTS,
    products
  };
}

export function sortAsc() {
  return {
    type: SORT_ASC,
  };
}

export function sortDesc() {
  return {
    type: SORT_DESC,
  };
}

export function getPizzaProducts(param) {
  return {
    type: GET_PIZZA_PRODUCTS,
    param,
  };
}
export function receivePizzaProducts(products) {
  return {
    type: RECEIVE_PIZZA_PRODUCTS,
    products
  };
}

export function getSteakProducts(param) {
  return {
    type: GET_STEAK_PRODUCTS,
    param,
  };
}
export function receiveSteakProducts(products) {
  return {
    type: RECEIVE_STEAK_PRODUCTS,
    products
  };
}