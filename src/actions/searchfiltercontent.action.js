import { types } from "../constants/searchfilter.constants";
import { getsearchresultsfilterervice } from '../services/searchfiltercontent.service';

export const searchfiltercontentAction = {
  SearchFilterContent
}

function SearchFilterContent({ filterType = "", keyword }) {
  return (dispatch) => {
    dispatch(request());
    getsearchresultsfilterervice.searchresultsfilter({ filterType, keyword }).then((res) => {
      dispatch(success(res, keyword));
    },
      (error) => {
        dispatch(failure(error.toString()));
      }
    )
  }
}


function request() {
  return { type: types.GET_SEARCH_FILTER_CONTENT_REQUESTED };
}
function success(res, keyword) {
  return { type: types.GET_SEARCH_FILTER_CONTENT_SUCCESS, res, keyword };
}
function failure(error) {
  return { type: types.GET_SEARCH_FILTER_CONTENT_FAILURE, error };
}