import { getwatchlistservice } from "../services/mylistcontent.service";
import { type } from "../constants/getwatchlist.constants";

// get the content details based on permalink
const watchList = () => {
  return (dispatch) => {
    dispatch(request({ type: type.GET_WATCH_LIST_REQUESTED }));
    getwatchlistservice.watchlist().then(
      (response) => {
        dispatch(success({ type: type.GET_WATCH_LIST_SUCCESS, response }));
      },
      (error) => {
        dispatch(failure({ type: type.GET_WATCH_LIST_FAILURE, error: error.toString() }));
      }
    );
  };
};

// clear all from watch list
const clearAllFromList = () => {
  return (dispatch) => {
    dispatch(request({ type: type.CLEAR_WATCH_LIST_REQUEST }))
    getwatchlistservice.clearwatchlist().then((response) => {
      dispatch(success({ type: type.CLEAR_WATCH_LIST_SUCCESS }, response))
    },
      (error) => {
        dispatch(failure({ type: type.CLEAR_WATCH_LIST_FAILURE, error }))
      }
    );
  }
}


function request({ type }) {
  return { type };
}

function success({ type, response }) {
  return { type, response };
}

function failure({ type, error }) {
  return { type, error };
}


export const getwatchlistAction = {
  watchList,
  clearAllFromList
};
