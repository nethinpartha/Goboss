import { types } from "../constants/getallsearchsuggestions.constants";

const initialState = {};

function SearchSuggestion(state = initialState, action) {
  switch (action.type) {
    case types.GET_SEARCH_SUGGESTIONS_REQUESTED:
      return { ...state, loading: true, response: action.response };
    case types.GET_SEARCH_SUGGESTIONS_FAILURE:
      return { ...state, loading: false, response: action.error };
    case types.GET_SEARCH_SUGGESTIONS_SUCCESS:
      return { ...state, loading: false, response: action.response };
    default:
      return state;
  }
}

export default SearchSuggestion;
