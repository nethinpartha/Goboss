import { types } from "../constants/homepageconstants";

const initialState = {};

export default function HomepageState(state = initialState, action) {
  switch (action.type) {
    case types.GET_RECOMMENDEDMOVIES:
      return { ...state, movies: action.payload, loading: false, error: null };
    case types.GET_CONTINUEWATCHING:
      return {
        ...state,
        continueWaching: action.payload,
        loading: false,
        error: null,
      };
    case types.HOME_PAGE_CONTENT:
      return {
        ...state,
        pagecontent: {
          trendingmovies: {
            records: action.payload,
            title: "Trending Now Movies",
            filters: ["Action", "Drama", "Romance", "Thriller"],
          },
        },
        pageconfig: {},
      };
    default:
      return state;
  }
}
