import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import auth from "./auth";

const rootReducer = combineReducers({
  // Vendor reducers
  form: formReducer,
  // Own reducers
  auth
});

export default rootReducer;
