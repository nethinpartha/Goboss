import { types } from "../constants/getuserinformation.constants";

const userinformation = (state = {
  loading: false, response: null
}, action) => {
  switch (action.type) {
    case types.GET_USER_INFORMATION_REQUESTED:
      return { ...state, loading: true };
    case types.GET_USER_INFORMATION_SUCCESS:
      return { ...state, response: action.response, loading: false, error: null };
    case types.GET_USER_INFORMATION_FAILURE:
      return { ...state, loading: false, response: null, error: action.error };
    case types.RESET_USER_INFORMATION:
      return { ...state, loading: false, response: null, error: null };
    default:
      return state;
  }
};

export default userinformation;
