import { type } from '../constants/addtowatchlist.constants';
import { addtowatchlistService } from '../services/addtowatchlist.service';
import { getusercontentdetailsAction } from './getusercontentdetails.action';
import { getHomePageContentsAction } from './gethomepagecontents.action';

// add to watchlist the content 
const addTolist = (contentId, reqType) => {
  return (dispatch) => {
    dispatch(request({ type: type.ADD_CONTENT_TO_WATCHLIST_REQUEST, contentId }));
    addtowatchlistService.addtowatchlist(contentId).then((response) => {
      dispatch(success({ type: type.ADD_CONTENT_TO_WATCHLIST_SUCCESS, response, contentId }))
      dispatch(getusercontentdetailsAction.getusercontentdetails(contentId));
      if (reqType == 'silent') {
        dispatch(getHomePageContentsAction.getHomePageContents({ reqType }))
      }
    },
      (error) => {
        dispatch(failure({ type: type.ADD_CONTENT_TO_WATCHLIST_FAILURE, error }))
      }
    );
  };
};



function request({ type, contentId }) {
  return { type, contentId };
}

function success({ type, response, contentId }) {
  return { type, response, contentId };
}

function failure({ type, error }) {
  return { type, error };
}

export const addtowatchlistAction = {
  addTolist
};
