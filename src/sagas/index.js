import { fork, all } from 'redux-saga/effects';
import { watchGetFullProducts, watchGetPizzaProducts, watchGetSteakProducts } from './products';

export default function* root() {
  yield all([
    fork(watchGetPizzaProducts),
    fork(watchGetSteakProducts),
    fork(watchGetFullProducts),
  ]);
}
