import { put, takeEvery } from "redux-saga/effects";

function* getProducts() {
  let data = yield fetch("http://localhost:3500/product");
  let response = yield data.json();
  yield put({ type: "SET_PRODUCT_LIST", response });
}

function* productSaga() {
  yield takeEvery("PRODUCT_LIST", getProducts);
  yield 
}
export default productSaga;
