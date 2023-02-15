import { types } from '../constants/homepagecontent.constants';
import { getHomePageContentService } from '../services/gethomepagecontent.service';

export const getHomePageContentsAction = {
  getHomePageContents
};

function getHomePageContents({ reqType = "" }) {
  return (dispatch) => {
    if (reqType == 'silent') { dispatch(request({ type: types.GET_HOME_PAGE_CONTENT_SILENT_REQUEST })); }
    else {
      dispatch(request({ type: types.GET_HOME_PAGE_CONTENT_REQUESTED }));
    }
    getHomePageContentService.getHomePageContents().then(
      response => {
        if (reqType == 'silent') {
          dispatch(success({ type: types.GET_HOME_PAGE_CONTENT_SILENT_SUCCESS, response }));
        } else {
          dispatch(success({ type: types.GET_HOME_PAGE_CONTENT_SUCCESS, response }));
        }
      },
      error => {
        if (reqType == 'silent') {
          dispatch(failure({ type: types.GET_HOME_PAGE_CONTENT_SILENT_FAILURE, error }));
        } else {
          dispatch(failure({ type: types.GET_HOME_PAGE_CONTENT_FAILURE, error }));
        }
      }
    )
  }
}

function request({ type }) {
  return { type: type }
}

function success({ response, type }) {
  return { type, response }
}

function failure({ type, error }) {
  return { type, error }
}
