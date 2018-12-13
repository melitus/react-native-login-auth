import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import localeReducer from "./localeReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  locale: localeReducer
});

export default rootReducer;
