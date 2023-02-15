import { type } from "../constants/contentsearch.constants";
import { types } from '../constants/searchfilter.constants';

const searchcontent = (state = {}, action) => {
  switch (action.type) {
    case type.GET_SEARCH_CONTENT_REQUESTED:
      return { ...state, loading: true, keyword: "" };
    case type.GET_SEARCH_CONTENT_SUCCESS:
      return { ...state, result: action.res, keyword: action.keyword, loading: false };
    case type.GET_SEARCH_CONTENT_FAILURE:
      return { ...state, loading: false, keyword: action.keyword, error: action.error }
    case types.GET_SEARCH_FILTER_CONTENT_SUCCESS:
      return { ...state, result: action.res, keyword: action.keyword, loading: false };
    default:
      return state;
  }
};

export default searchcontent;
