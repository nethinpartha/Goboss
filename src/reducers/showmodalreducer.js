import { types } from "../actions/showmodal.action";

const initialState = {
  show: false,
  currentpagetoshow: 'signin'
};
const ShowModalComp = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_POPUP:
      return { ...state, show: true, currentpagetoshow: action.currentpage };
    case types.CLOSE_POPUP:
      return { ...state, show: false };
    default:
      return state;
  }
};

export default ShowModalComp;
