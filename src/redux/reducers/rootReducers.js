import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import localeReducer from "./localeReducer";
import auth from "./auth";

const rootReducer = combineReducers({
  auth,
  form: formReducer,
  locale: localeReducer
});

export default rootReducer;
