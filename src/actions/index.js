import { CHANGE_TEXT } from "./actionTypes";

const changeText = inputText => {
  return {
    type: CHANGE_TEXT,
    payload: inputText
  };
};

export default changeText;
