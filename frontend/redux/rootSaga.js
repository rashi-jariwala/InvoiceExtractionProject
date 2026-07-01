import { all } from "redux-saga/effects";
import invoiceSaga from "./invoice/invoice.saga";

export default function* rootSaga() {
  yield all([
    invoiceSaga(),
  ]);
}