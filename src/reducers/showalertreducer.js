import { types } from "../actions/showalert.action";

const initialState = {
  show: false,
  currentpagetoshow: 'signin',
  body: '',
  title: ''
};
const ShowAlertComp = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_ALERT_REQUESTED:
      return { ...state, show: true, body: action.body, title: action.title };
    case types.CLOSE_ALERT_REQUESTED:
      return { ...state, show: false };
    default:
      return state;
  }
};

export default ShowAlertComp;
