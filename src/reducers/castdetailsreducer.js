import { type } from "../constants/castdetails.constants";

const initialState = {
  loading: false,
  response: null
};

function castdetail(state = initialState, action) {
  switch (action.type) {
    case type.GET_CAST_DETAILS_REQUEST:
      return { ...state, loading: true, response: action.newemail };
    case type.GET_CAST_DETAILS_SUCCESS:
      return { ...state, loading: false, response: action.response };
    case type.GET_CAST_DETAILS_FAILURE:
      return { ...state, loading: false, response: [], error: action.error };
    default:
      return state;
  }
}

export default castdetail;
