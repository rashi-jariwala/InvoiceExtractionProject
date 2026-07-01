import * as types from "./invoice.constants";

export const uploadInvoice = (payload) => ({
  type: types.UPLOAD_INVOICE,
  payload,
});

export const getInvoices = (username) => ({
  type: types.GET_INVOICES,
  payload: username,
});

