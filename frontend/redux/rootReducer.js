import { combineReducers } from "redux";
import invoiceReducer from "./invoice/invoice.reducer";

const rootReducer = combineReducers({
  invoice: invoiceReducer,
});

export default rootReducer;