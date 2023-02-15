import { type } from "../constants/contentdetails.constants";

const initialState = {};

function ContentDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_CONTENT_DETAILS_REQUESTED:
      return {
        ...state,
        loading: true,
        response: action.response,
        videoType: "",
      };
    case type.GET_MOVIE_URL_REQUESTED:
      return {
        ...state,
        isURLfetching: true,
      };
    case type.GET_MOVIE_URL_SUCCESS:
      return {
        ...state,
        isURLfetching: false,
        movieURL: action.response,
      };
    case type.GET_MOVIE_URL_FAILURE:
      return {
        ...state,
        isURLfetching: false,
        movieURL: action.error,
      };
    case type.MOVIE_URL_RESET:
      return {
        ...state,
        movieURL: [],
      };
    case type.GET_CONTENT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.response,
        videoType: "",
      };
    case type.GET_CONTENT_DETAILS_SUCCESS_NO_LOADING:
      return {
        ...state,
        response: action.response,
        videoType: "",
      };
    case "PLAYER_VIDEO_TYPE":
      return { ...state, videoType: action.videotype, player: true };
    case type.GET_CONTENT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        response: action.error,
        videoType: "",
      };
    default:
      return state;
  }
}

export default ContentDetailsReducer;
