import { types } from "../constants/getUserProfile.constants";

const userprofile = (state = {
  loading: false, response: null
}, action) => {
  switch (action.type) {
    case types.GET_USER_PROFILE_REQUESTED:
      return { ...state, loading: true };
    case types.GET_USER_PROFILE_SUCCESS:
      return { ...state, response: action.response, loading: false };
    case types.GET_USER_PROFILE_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default userprofile;
