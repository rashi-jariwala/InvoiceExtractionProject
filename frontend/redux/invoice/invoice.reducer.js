import * as types from "./invoice.constants";

const initialState = {
  loading: false,
  invoices: [],
  invoice: {},
  error: null,
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPLOAD_INVOICE:
    case types.GET_INVOICES:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case types.UPLOAD_INVOICE_SUCCESS:
    return {
        ...state,
        loading: false,
        invoice: action.payload.data,
    };

    case types.GET_INVOICES_SUCCESS:
      return {
        ...state,
        loading: false,
        invoices: action.payload,
      };

    case types.UPLOAD_INVOICE_FAILURE:
    case types.GET_INVOICES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default invoiceReducer;