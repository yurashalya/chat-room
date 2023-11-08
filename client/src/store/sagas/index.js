import { take } from 'redux-saga/effects';
import { INCREASE_COUNT } from '../constants';

export function* workerSaga() {

}

export function* watchClickSaga() {
  yield take(INCREASE_COUNT);
  console.log('request 1');

}

export default function* rootSaga() {
  yield watchClickSaga();
}