import { types } from '../constants/getallsearchsuggestions.constants';
import { getSearchSuggestionsService } from '../services/getsearchsuggestion.service';


export const getSearchSuggestionAction = {
  getSearchSuggestions
};

function getSearchSuggestions() {
  return (dispatch) => {
    dispatch(request());
    getSearchSuggestionsService.getSearchSuggestion().then(
      response => {
        dispatch(success(response));
      },
      error => {
        dispatch(failure(error));
      }
    )
  }
}

function request() {
  return { type: types.GET_SEARCH_SUGGESTIONS_REQUESTED }
}

function success(response) {
  return { type: types.GET_SEARCH_SUGGESTIONS_SUCCESS, response }
}

function failure(error) {
  return { type: types.GET_SEARCH_SUGGESTIONS_FAILURE, error }
}
