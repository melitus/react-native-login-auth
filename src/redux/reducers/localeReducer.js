import { CHANGE_LOCALE } from "../actions/actionTypes";
import { locales } from "../../Locales";

const initialState = locales.English;

export default function localeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      const newState = locales[action.locale];
      return newState;

    default:
      return state;
  }
}
