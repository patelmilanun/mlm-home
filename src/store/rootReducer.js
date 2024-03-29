import { combineReducers } from "@reduxjs/toolkit";
import { reducer as authReducer } from "slices/auth";
import { reducer as commonReducer } from "slices/common";
import { reducer as courseReducer } from "slices/course";
// import { reducer as userReducer } from 'slices/user';
// import { reducer as paymentReducer } from 'slices/payment';

const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
  course: courseReducer,
  // session: sessionReducer,
  // user: userReducer,
  // payment: paymentReducer
});

export default rootReducer;
