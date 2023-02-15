import { type } from "../constants/erroralert.constants";

const initialState = {
  show: false,
  message: '',
  title: ''
};
const ErrorAlert = (state = initialState, action) => {
  switch (action.type) {
    case type.SHOW_ERROR_ALERT:
      return { ...state, show: true, message: action.message, title: action.title };
    case type.HIDE_ERROR_ALERT:
      return { ...state, show: false, message: '', title: '' };
    default:
      return state;
  }
};

export default ErrorAlert;
