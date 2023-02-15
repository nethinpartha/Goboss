import React from "react";
import { pathOr } from "ramda";
import { useSelector } from "react-redux";

export const __parseresults = (result) => {
  if (result?.content && result?.content?.length === 0) return [];
  return result?.content?.map((item, index) => {
    return {
      id: item.id,
      index,
      title: `${item.title}`,
      imageUrl: pathOr("", ["gallery", "1x1"])(item),
      release_date: `${pathOr("", ["customData", "yearOfRelease"])(item)}`,
      displayTextOnCard: false,
      displayHoverState: false,
      permalink: pathOr("", ["permaLink"])(item),
      smallSize: false,
      watchHistory: pathOr({}, ["watchHistory"])(item),
      runtime: pathOr("", ["runtime"])(item),
    };
  });
};

export function SearchContentSelector() {
  const searchcontent = useSelector((state) =>
    pathOr(null, ["searchcontent"])(state)
  );
  const result = pathOr([], ["result", "result"])(searchcontent);
  return __parseresults(result);
}
