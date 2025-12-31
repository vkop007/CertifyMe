import { takeLatest, put, delay } from "redux-saga/effects";
import {
  addToCartRequest,
  addToCartSuccess,
  addToCartFailure,
} from "../slices/cartSlice";

function* addToCartWorker(action: ReturnType<typeof addToCartRequest>) {
  try {
    // simulate API / async work
    yield delay(300);

    // success
    yield put(addToCartSuccess(action.payload));
  } catch (error) {
    yield put(addToCartFailure("Something went wrong while adding to cart"));
  }
}

export function* cartSaga() {
  yield takeLatest(addToCartRequest.type, addToCartWorker);
}
