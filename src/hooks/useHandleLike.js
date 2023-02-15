import React, { useEffect } from "react";
import { pathOr } from "ramda";
import { useDispatch, useSelector } from "react-redux";
import useAuthStatus from "../hooks/useAuthStatus";
import { contentdetailLikeAction } from "../actions/likecontent.action";
import { addtowatchlistAction } from "../actions/addToWatchList.action";
import { showModalComAction } from "../actions/showmodal.action";
import UserInfoSelector from "../selectors/getuserinformationselector";

export default function HandleLike() {
  const dispatch = useDispatch();
  let [isSignedIn] = useAuthStatus();
  let isSubscription = useSelector((state) =>
    pathOr(false, ["ThemeState", "isSubscription"])(state)
  );
  const isVerified = useSelector((state) =>
    pathOr("", ["UserInformation", "response", "result", "isVerified"])(state)
  );
  let { isSubscribed } = UserInfoSelector();
  let permalink = useSelector((state) =>
    pathOr("", ["ContentDetails", "response", "result", "permaLink"])(state)
  );
  const handleLikeClick = (contentId, type, reqType) => {
    if (!isSignedIn) {
      dispatch(showModalComAction.ShowModal("signin"));
      return;
    }
    if (isSubscription === true && isSignedIn) {
      if (!isVerified) {
        dispatch(showModalComAction.ShowModal("toverifyemail"));
        return;
      }
      if (!isSubscribed) {
        dispatch(showModalComAction.ShowModal("membership"));
        return;
      }
      if (type === "like") {
        dispatch(
          contentdetailLikeAction.likeContent(contentId, permalink, reqType)
        );
        return;
      } else {
        dispatch(addtowatchlistAction.addTolist(contentId, reqType));
        return;
      }
    }

    if (isSubscription === false) {
      if (isSignedIn) {
        if (type === "like") {
          dispatch(
            contentdetailLikeAction.likeContent(contentId, permalink, reqType)
          );
          return;
        } else {
          dispatch(addtowatchlistAction.addTolist(contentId, reqType));
          return;
        }
      }
    }
  };

  return { handleLikeClick };
}
