import { likecontenttype } from '../constants/contentdetails.constants';
import { likeContentService } from '../services/likecontent.service';
import { getusercontentdetailsAction } from './getusercontentdetails.action';
import { contentdetailsAction } from "./contentdetails.action";
import { getHomePageContentsAction } from './gethomepagecontents.action';

// like the content 
const likeContent = (contentId, permalink, reqType) => {
  return (dispatch) => {
    dispatch(request(contentId));
    likeContentService.likeContent(contentId).then((response) => {
      dispatch(success(response))
      dispatch(getusercontentdetailsAction.getusercontentdetails(contentId));
      if (reqType == 'silent') {
        dispatch(getHomePageContentsAction.getHomePageContents({ reqType }))
      }
      if (permalink) {
        dispatch(contentdetailsAction.contentdetails(permalink));
      }
    },
      (error) => {
        dispatch(failure(error))
      }
    );
  };
};

function request(id) {
  return { type: likecontenttype.LIKE_CONTENT_REQUESTED, id };
}

function success(response) {
  return { type: likecontenttype.LIKE_CONTENT_SUCCESS, response };
}

function failure(error) {
  return { type: likecontenttype.LIKE_CONTENT_FAILURE, error };
}

export const contentdetailLikeAction = {
  likeContent
};