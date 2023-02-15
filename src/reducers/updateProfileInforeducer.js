import { types } from "../constants/updateprofile.constants";

const updateProfileInfo = (state = {
  loading: false, response: null
}, action) => {
  switch (action.type) {
    case types.UPDATE_PROFILE_INFO_REQUESTED:
      return { ...state, loading: true };
    case types.UPDATE_PROFILE_INFO_SUCCESS:
      return { ...state, response: action.response, loading: false };
    case types.UPDATE_PROFILE_INFO_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default updateProfileInfo;
