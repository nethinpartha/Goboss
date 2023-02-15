import { types } from '../constants/homepagecontent.constants';

const initialState = {
  records: null,
  loading: false
};

function HomePageContentReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_HOME_PAGE_CONTENT_REQUESTED:
      return { ...state, loading: true }
    case types.GET_HOME_PAGE_CONTENT_SUCCESS:
      return { ...state, records: action.response, loading: false }
    case types.GET_HOME_PAGE_CONTENT_FAILURE:
      return { ...state, records: null, loading: false, error: action.error }
    case types.GET_HOME_PAGE_CONTENT_SILENT_REQUEST:
      return { ...state, loading: false }
    case types.GET_HOME_PAGE_CONTENT_SILENT_SUCCESS:
      return { ...state, records: action.response, loading: false }
    case types.GET_HOME_PAGE_CONTENT_FAILURE:
      return { ...state, records: null, loading: false, error: action.error }
    default:
      return state;
  }
};

export default HomePageContentReducer;