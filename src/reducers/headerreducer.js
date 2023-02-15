import { types } from '../constants/header.constants';

const initialState = {
  records: null,
  loading: false
};

function HeaderReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_HEADER_CONTENT_REQUEST:
      return { ...state, loading: true }
    case types.GET_HEADER_CONTENT_SUCCESS:
      return { ...state, records: action.response, loading: false }
    case types.GET_HEADER_CONTENT_FAILURE:
      return { ...state, records: null, loading: false }
    default:
      return state;
  }
};

export default HeaderReducer;