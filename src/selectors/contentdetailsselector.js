import React from "react";
import { pathOr } from "ramda";
import { useSelector } from "react-redux";
// import useWindowSize from '../helpers/viewport';

//  Use the selector as a factory to parse and map the data to the respective components

const __parseCastDetails = (cast) => {
  if (cast.length === 0) return [];
  return cast.map((item, index) => {
    return {
      id: item.id,
      index,
      title: `${item.firstName} ${item.lastName}`,
      imageUrl: item.profilePic,
      release_date: pathOr("", ["release_date"])(item),
      role: pathOr("", ["role"])(item),
      displayTextOnCard: false,
      displayHoverState: false,
      permalink: "",
      smallSize: false,
    };
  });
};

export function Contentdetailsselector() {
  let contentdetails = useSelector((state) =>
    pathOr(null, ["ContentDetails"])(state)
  );

  let result = pathOr(null, ["response", "result"], contentdetails);
  const cast = pathOr([], ["cast"], result);

  // gallery sizes available
  // use 16*9 for content details page
  // let size = useWindowSize();
  // let { width } = size
  // `${width <= 600 ? "1x1" : width <= 640 ? "4x3" : width <= 999 ? "3x2" : "16x9"}`
  return {
    contentId: pathOr("", ["id"])(result),
    renditions: pathOr("", ["renditions"])(result),
    cast: __parseCastDetails(cast),
    loading: pathOr(false, ["loading"])(contentdetails),
    title: pathOr("", ["title"], result),
    certificate: pathOr(
      null,
      ["response", "result", "customData", "certificate"],
      contentdetails
    ),
    description: pathOr("", ["description"], result),
    likes: pathOr("", ["likes"], result),
    fileName: pathOr("", ["fileName"], result),
    isFreeContent: pathOr("", ["isFreeContent"], result),
    watchHistory: pathOr({}, ["watchHistory"])(result),
    isUserLiked: pathOr(false, ["isUserLiked"])(result),
    isUserAddedToList: pathOr(false, ["isUserAddedToList"])(result),
    genres: pathOr("", ["genres"], result),
    languages: pathOr([], ["language"], result),
    gallary: {
      bannerbackdrop: pathOr("", ["gallery", "16x9"])(result),
      videothumbnail: pathOr("", ["gallery", "1x1"])(result),
    },

    is4K: pathOr(false, ["customData", "is4K"])(result),
    isHD: pathOr(false, ["customData", "isHD"])(result),
    isDolby: pathOr(false, ["customData", "isDolby"])(result),
    isdolbyAtmos: pathOr(false, ["customData", "isdolbyAtmos"])(result),
    duration: pathOr("", ["duration"])(result),
    runtime: pathOr("", ["runtime"])(result),
    yearOfRelease: pathOr("", ["customData", "yearOfRelease"])(result),
    trailerURL: pathOr("", ["customData", "trailerURL"])(result),
    noContentFound: result,
    permaLink: pathOr("", ["permaLink"])(result),
    videoType: pathOr("", ["videoType"])(contentdetails),
  };
}
