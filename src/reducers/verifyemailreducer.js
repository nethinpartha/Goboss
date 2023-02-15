import { types } from "../constants/verifyemail.constants";


const VerifyEmail = (state = {
  error: null,
  response: null,
  loading: false,
  tried: 1,
  failure: false,
}, action) => {
  switch (action.type) {
    case types.REQUEST_EMAIL_VERIFICATION:
      return {
        ...state,
        response: null,
        loading: true,
        error: null
      };
    case types.EMAIL_VERIFICATION_SUCCESS:
      return {
        ...state,
        response: action.user,
        loading: false,
        tried: 0,
        error: null
      };
    case types.EMAIL_VERIFICATION_FAILURE:
      return {
        ...state,
        response: null,
        loading: false,
        tried: 0,
        failure: true,
        error: action.error
      };
    default:
      return state;
  }
};

export default VerifyEmail;
