import { types } from "../constants/videoplayer.constants";


const Videoplayercontent = (state = {
  error: null,
  response: null,
  loading: false,
}, action) => {
  switch (action.type) {
    case types.VIDEO_PLAYER_CONTENT_REQUESTED:
      return {
        ...state,
        response: null,
        loading: true,
        error: null
      };
    case types.VIDEO_PLAYER_CONTENT_SUCCESS:
      return {
        ...state,
        response: action.payload,
        loading: false,
        error: null
      };
    case types.VIDEO_PLAYER_CONTENT_FAILURE:
      return {
        ...state,
        response: null,
        loading: true,
        error: null
      };
    default:
      return state;
  }
};

export default Videoplayercontent;
