import { type } from "../constants/getwatchlist.constants";
import { pathOr } from 'ramda';

const watchlist = (state = {
  loading: false, list: [], error: null
}, action) => {
  switch (action.type) {
    case type.GET_WATCH_LIST_REQUESTED:
      return { ...state, loading: true };
    case type.GET_WATCH_LIST_SUCCESS:
      return { ...state, list: action.response, loading: false };
    case "ADD_CONTENT_TO_WATCHLIST_SUCCESS":
      return { ...state, list: { result: pathOr([], ['list', 'result'])(state).filter(item => item.id !== action.contentId) }, loading: false }
    case type.GET_WATCH_LIST_FAILURE:
      return { ...state, loading: false, error: action.error };
    case type.CLEAR_WATCH_LIST_SUCCESS:
      return { ...state, loading: false, list: [], error: null }
    default:
      return state;
  }
};

export default watchlist;
