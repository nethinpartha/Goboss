import React from "react";
import { path, pathOr } from "ramda";
import { useSelector } from "react-redux";
import { __isThemeOfType } from "../utils/tenant";
const GetComponents = () =>
  useSelector((state) =>
    pathOr([], ["HomePageContent", "records", "result", "components"])(state)
  );

export function HomeContentSelector() {
  const components = GetComponents();
}

export function GetVideoBannerContent() {
  const components = GetComponents();
  const loading = useSelector((state) =>
    pathOr(false, ["HomePageContent", "loading"])(state)
  );
  const videBannerContent = components.find(
    (component) =>
      component.componentType ===
      (__isThemeOfType() ? "imgCarousel" : "videoBanner")
  );
  const buttons = pathOr([], ["buttons"])(videBannerContent);
  let playbtn = null;
  let addToListbtn = null;
  if (buttons.length > 0) {
    playbtn = buttons.find((btn) => btn.type === "playVideo");
    addToListbtn = buttons.find((btn) => btn.type === "addtoList");
  }

  if (__isThemeOfType()) {
    return {
      loading,
      pageId: pathOr("", ["pageId"])(videBannerContent),
      componentId: pathOr("", ["componentId"])(videBannerContent),
      contentType: pathOr("", ["contentType"])(videBannerContent),
      contentData: pathOr([], ["content", "data"])(videBannerContent),
      videoPermalink: "",
    };
  }
  return {
    loading,
    pageId: pathOr("", ["pageId"])(videBannerContent),
    componentId: pathOr("", ["componentId"])(videBannerContent),
    videoId: pathOr("", ["videoId"])(videBannerContent),
    title: pathOr("", ["title"])(videBannerContent),
    thumbnail: pathOr("https://via.placeholder.com/1200x1200", ["thumbnail"])(
      videBannerContent
    ),
    videoURL: pathOr("", ["videoURL"])(videBannerContent),
    contentType: pathOr("", ["contentType"])(videBannerContent),
    description: pathOr("", ["description"])(videBannerContent),
    videoPermalink: pathOr("", ["videoPermalink"])(videBannerContent),
    playbtn: pathOr("", ["title"])(playbtn),
    addToListbtn: pathOr("", ["title"])(addToListbtn),
  };
}

const getGeneres = (geners) => {
  if (!geners) return [];
  let length = geners.length;
  let concatenateGenres = "";
  geners.forEach((val, index) => {
    concatenateGenres += `${val && val.title}${index + 1 < length ? ", " : ""}`;
  });
  return concatenateGenres;
};
const __parseTrendingtDetails = (data, size) => {
  if (data.length === 0) return [];
  return data.map((item, index) => {
    return {
      id: pathOr("", ["id"])(item),
      index,
      title: pathOr("", ["title"])(item),
      description: pathOr("", ["description"])(item),
      imageUrl: pathOr("", ["gallery", `${size}`])(item),
      release_date: pathOr("", ["customData", "yearOfRelease"])(item),
      yearOfRelease: pathOr("", ["customData", "yearOfRelease"])(item),
      certificate: pathOr("", ["customData", "certificate"])(item),
      price: pathOr("", ["customData", "price"])(item),
      trailerURL: pathOr("", ["customData", "trailerURL"])(item),
      duration: pathOr("", ["duration"])(item),
      displayTextOnCard: false,
      displayHoverState: false,
      genres: getGeneres(pathOr("", ["genres"])(item)),
      permalink: pathOr("", ["permaLink"])(item),
      isFreeContent: pathOr("", ["isFreeContent"])(item),
      likes: pathOr("", ["likes"])(item),
      language: pathOr("", ["language", "title"])(item),
      runtime: pathOr("", ["runtime"])(item),
      watchHistory: pathOr({}, ["watchHistory"])(item),
      isUserLiked: pathOr(false, ["isUserLiked"])(item),
      isUserAddedToList: pathOr(false, ["isUserAddedToList"])(item),
      smallSize: false,
    };
  });
};
export function GetTrendingTrayContent(category) {
  const components = GetComponents();
  const loading = useSelector((state) =>
    pathOr(false, ["HomePageContent", "loading"])(state)
  );
  let traycontent
  if(category){
     traycontent = components.find(
      (component) => component.contentType ===  "category"
    );
  }else{
   traycontent = components.find(
    (component) => component.componentType ===  "tray"
  );
  }
  const trayData = pathOr([], ["content", "data"])(traycontent);
  return {
    loading,
    componentId: pathOr("", ["componentId"])(traycontent),
    title: pathOr("", ["componentTitle"])(traycontent),
    componentOrder: pathOr("", ["componentOrder"])(traycontent),
    content: __parseTrendingtDetails(trayData, "3x2"),
  };
}

export function GetTrayFilterContent() {
  const components = GetComponents();
  const loading = useSelector((state) =>
    pathOr(false, ["HomePageContent", "loading"])(state)
  );
  const traycontent = components.find(
    (component) => component.componentType === "trayWithFilter"
  );
  const trayData = pathOr([], ["content", "data"])(traycontent);
  const filtertype = pathOr([], ["content", "filters"])(traycontent);
  return {
    loading,
    componentId: pathOr("", ["componentId"])(traycontent),
    title: pathOr("", ["componentTitle"])(traycontent),
    filtertype:filtertype,
    componentOrder: pathOr("", ["componentOrder"])(traycontent),
    content: __parseTrendingtDetails(trayData, "3x2"),
  };
}

export function GetTrendingNowTrayContent() {
  const components = GetComponents();
  const loading = useSelector((state) =>
    pathOr(false, ["HomePageContent", "loading"])(state)
  );
  const traycontent = components.find(
    (component) => component.componentType === "trendingSection"
  );
  const trayData = pathOr([], ["content", "data"])(traycontent);
  return {
    loading,
    componentId: pathOr("", ["componentId"])(traycontent),
    title: pathOr("", ["componentTitle"])(traycontent),
    componentOrder: pathOr("", ["componentOrder"])(traycontent),
    content: __parseTrendingtDetails(trayData, "4x3"),
  };
}

export function GetTrayWithLeftSectionContent() {
  const components = GetComponents();
  const traycontent = components.find(
    (component) => component.componentType === "trayWithLeftSection"
  );
  const trayData = pathOr([], ["content", "data"])(traycontent);
  const loading = useSelector((state) =>
    pathOr(false, ["HomePageContent", "loading"])(state)
  );
  return {
    loading,
    componentId: pathOr("", ["componentId"])(traycontent),
    categoryPermalink: pathOr("", ["categoryPermalink"])(traycontent),
    categoryId: pathOr("", ["categoryId"])(traycontent),
    header: pathOr("", ["componentTitle"])(traycontent),
    subTitle: pathOr("", ["subTitle"])(traycontent),
    componentOrder: pathOr("", ["componentOrder"])(traycontent),
    content: __parseTrendingtDetails(trayData, "3x2"),
  };
}
