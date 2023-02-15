import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { contentdetailsAction } from "../../../actions/contentdetails.action";
import { Contentdetailscontext } from "../../../context/contentdetails.context";
import { ContentDetails } from "../../../components/ContentDetails/contentdetails";
import ContentDetailsPageLayout from "../../../styles/layouts/component/styledcomponent/contentdetailsstyle";
import { useMediaQuery } from "../../../components/Header/viewportHook";
import { Contentdetailsselector } from "../../../selectors/contentdetailsselector";
// import { LoadingSkeltonTemplate } from "../../../frontend-library/atoms/loadingSpinner/loadingskeleton";
import LoadingSpinner from "../../../frontend-library/atoms/loadingSpinner";

import useAuthStatus from "../../../hooks/useAuthStatus";
import { HeroBanner } from "../../../components/HeroBanner";
import { __parseThemeSelector } from "../../../selectors/themestyleselector";

export const ContentDetailsProvider = () => {
  const dispatch = useDispatch();
  let {
    loading,
    title,
    description,
    gallary,
    genres,
    languages,
    noContentFound,
    duration,
    yearOfRelease,
    trailerURL,
    contentId,
    likes,
    certificate,
    isFreeContent,
  } = Contentdetailsselector();
  const api_key = "df1a8a2aad5fbba70d7851155c59e9f7";
  let [isSignedIn] = useAuthStatus();
  const [movieDetails, setDetails] = useState();
  // const [detailShow, setShow] = useState(1);
  const base_url = "https://api.themoviedb.org/3/movie/";
  let director = "";
  let crew = [];
  let writing = [];
  let production = [];
  const { isSignIn } = __parseThemeSelector();
  const opts = {
    width: "100%",
    minHeight: "200%",
    paddingTop: "56.25%", // Percentage ratio for 16:9
    position: "absolute",
    playerVars: {
      autoplay: 1,
      listType: "user_uploads",
    },
  };

  const movie_id = "2460465";
  const permalink = window.location.pathname;

  const image_base_url = "https://image.tmdb.org/t/p/original/";

  // media query display
  const breakpoint = {
    sm: useMediaQuery("(max-width: 576px)"),
    md: useMediaQuery("(min-width: 768px)"),
    lg: useMediaQuery("(min-width:1200px)"),
    xl: useMediaQuery("(max-width: 1440px)"),
  };

  useEffect(() => {
    if (isSignedIn) {
      return dispatch(
        contentdetailsAction.contentdetails(permalink, contentId)
      );
    }
    return dispatch(contentdetailsAction.contentdetails(permalink));
  }, []);

  const ContentDetailsState = {
    contentId,
    isSignedIn,
    movieDetails,
    crew,
    director,
    production,
    certificate,
    writing,
    opts,
    image_base_url,
    breakpoint,
    movie_id,
    title,
    description,
    gallary,
    genres,
    languages,
    noContentFound,
    duration,
    yearOfRelease,
    trailerURL,
    likes,
    isFreeContent,
    isSignIn,
  };

  if (loading) {
    return (
      <LoadingSpinner
      // page={"content"}
      />
    );
  }
  return (
    <Contentdetailscontext.Provider value={ContentDetailsState}>
      <>
        <ContentDetailsPageLayout />
        {process.env.REACT_APP_THEMETYPE !== "classic" ? (
          <ContentDetails />
        ) : (
          // <></>
          <HeroBanner />
        )}
      </>
    </Contentdetailscontext.Provider>
  );
};
