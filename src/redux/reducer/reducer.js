import { combineReducers } from "@reduxjs/toolkit";

import bookReducer from "../slice/book";
import studentReducer from "../slice/student";

const rootReducer = combineReducers({
  book: bookReducer,
  student: studentReducer,
});

export default rootReducer;
