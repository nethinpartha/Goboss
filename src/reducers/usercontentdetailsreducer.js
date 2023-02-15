import { types } from "../constants/getusercontent.constants";

const usercontentdetails = (state = {
  loading: false, response: null
}, action) => {
  switch (action.type) {
    case types.GET_USER_CONTENT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case types.GET_USER_CONTENT_DETAILS_SUCCESS:
      return { ...state, response: action.response, loading: false };
    case types.GET_USER_CONTENT_DETAILS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default usercontentdetails;
