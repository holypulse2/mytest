import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../redux/actions/products';
import { beers } from '../services/api/products';

function beersApi(pageNumber) {
  return beers(`?page=${pageNumber}&per_page=20`)
}

function beersFoodApi(param) {
  return beers(`?page=${param.pageNumber}&per_page=20&food=${param.foodType}`);
}

export function* getFullProducts(param) {
  const products = yield call(beersApi, param.pageNumber);
  yield put(actions.receiveFullProducts(products));
}

export function* getPizzaProducts(action) {
  const products = yield call(beersFoodApi, action.param);

  yield put(actions.receivePizzaProducts(products));
}

export function* getSteakProducts(action) {
  const products = yield call(beersFoodApi, action.param);

  yield put(actions.receiveSteakProducts(products));
}

export function* watchGetSteakProducts() {

  yield takeLatest(actions.GET_STEAK_PRODUCTS, getSteakProducts);
}

export function* watchGetPizzaProducts() {

  yield takeLatest(actions.GET_PIZZA_PRODUCTS, getPizzaProducts);
}

export function* watchGetFullProducts() {

  yield takeLatest(actions.GET_FULL_PRODUCTS, getFullProducts);
}


