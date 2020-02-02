import { CHANGE_TEXT } from "../actions/actionTypes";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const INITAL_STATE = "";

const changeTextReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  inputText: changeTextReducer,
  form: formReducer
});
