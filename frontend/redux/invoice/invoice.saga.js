import { call, put, takeLatest } from "redux-saga/effects";

import * as types from "./invoice.constants";
import invoiceService from "../../services/invoice.service";

function* uploadInvoiceSaga(action) {
  try {
    const response = yield call(
      invoiceService.uploadInvoice,
      action.payload
    );

    yield put({
      type: types.UPLOAD_INVOICE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: types.UPLOAD_INVOICE_FAILURE,
      payload: error.message,
    });
  }
}

function* getInvoicesSaga(action) {
  try {
    const response = yield call(
      invoiceService.getInvoices,
      action.payload
    );

    yield put({
      type: types.GET_INVOICES_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    yield put({
      type: types.GET_INVOICES_FAILURE,
      payload: error.message,
    });
  }
}

export default function* invoiceSaga() {
  yield takeLatest(types.UPLOAD_INVOICE, uploadInvoiceSaga);
  yield takeLatest(types.GET_INVOICES, getInvoicesSaga);
}