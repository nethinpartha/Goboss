import { type } from "../constants/contentsearch.constants";
import { searchcontentservice } from "../services/searchcontent.service";

export const searchcontentAction = {
  SearchContent,
};

function SearchContent({ keyword = "" }) {
  return (dispatch) => {
    dispatch(request());
    searchcontentservice.searchcontent({ keyword }).then(
      (res) => {
        dispatch(success(res, keyword));
      },
      (error) => {
        dispatch(failure(error.toString(), keyword));
      }
    );
  };
}

function request() {
  return { type: type.GET_SEARCH_CONTENT_REQUESTED };
}
function success(res, keyword) {
  return { type: type.GET_SEARCH_CONTENT_SUCCESS, res, keyword };
}
function failure(error, keyword) {
  return { type: type.GET_SEARCH_CONTENT_FAILURE, error, keyword };
}
