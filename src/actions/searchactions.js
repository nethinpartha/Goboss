import * as Movies from "../components/Carousel/api/Movies";

export const types = {
  GET_SEARCH_MOVIES: "GET_SEARCH_MOVIES",
  GET_SEARCH_SUCCESS: "GET_SEARCH_SUCCESS",
  GET_SEARCH_LOADING: "GET_SEARCH_LOADING",
  GET_SEARCH_FAULURE: "GET_SEARCH_FAULURE",
};

export const searchActions = {
  SearchReq,
};

function SearchReq(query) {
  return (dispatch) => {
    dispatch(request({ type: types.GET_SEARCH_MOVIES }));
    Movies.search(query)
      .then((res) => {
        dispatch({ type: types.GET_SEARCH_LOADING });
        dispatch(success({ fetchedMovies: res, movieSearched: true }));
      })
      .catch((err) =>
        dispatch(failure({ type: types.GET_SEARCH_FAULURE, err }))
      );
  };

  function request(res = []) {
    return { type: types.GET_SEARCH_MOVIES, res };
  }
  function success(records = []) {
    return { type: types.GET_SEARCH_SUCCESS, records };
  }
  function failure(error) {
    return { type: types.GET_SEARCH_FAULURE, error };
  }
}
