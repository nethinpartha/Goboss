import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { contentdetailsAction } from "../../../actions/contentdetails.action";
import { Contentdetailscontext } from "../../../context/contentdetails.context";
import { SeriesDetails } from "../../../components/SeriesDetails/seriesdetails";
import ContentDetailsPageLayout from "../../../styles/layouts/component/styledcomponent/contentdetailsstyle";
import { useMediaQuery } from "../../../components/Header/viewportHook";
import { Contentdetailsselector } from "../../../selectors/contentdetailsselector";
import LoadingSpinner from "../../../frontend-library/atoms/loadingSpinner";
import { useHistory } from "react-router-dom";

import useAuthStatus from "../../../hooks/useAuthStatus";
import { HeroBanner } from "../../../components/HeroBanner";
import { __parseThemeSelector } from "../../../selectors/themestyleselector";

export const SeriesDetailsProvider = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  let dummyData = {
    responseCode: 200,
    message: "Sucess",
    total: 1,
    result: {
      content: [
        {
          genres: [
            {
              title: "Science Fiction",
              id: "60643d68fdd0c4275a572ee6",
            },
            {
              title: "Comedy",
              id: "606221caaa9fc848d0fc2a00",
            },
          ],
          tags: [],
          likes: 1,
          isFreeContent: false,
          language: [],
          country: ["Global"],
          excludedCountries: [],
          isEpisode: false,
          subtitle: "",
          gallery: {
            "16x9":
              "https://w8v9p9p5.stackpathcdn.com/tentkotta-images/videos/thumbnails/546UnIfG.jpg",
            "1x1":
              "https://w8v9p9p5.stackpathcdn.com/tentkotta-images/videos/thumbnails/546UnIfG.jpg",
            "4x3":
              "https://w8v9p9p5.stackpathcdn.com/tentkotta-images/videos/thumbnails/546UnIfG.jpg",
            "3x2":
              "https://w8v9p9p5.stackpathcdn.com/tentkotta-images/videos/thumbnails/546UnIfG.jpg",
          },
          title: "Cobra",
          permaLink: "/content/film-11",
          description:
            "A brilliant mathematician disguises himself as a hit guy, assassinating those who oppose a cruel corporate power. Can he avoid the mystery hacker who wants to reveal him while avoiding the Interpol and the psychopathic boss of the business who are chasing him?",
          duration: "3hr 10min",
          runtime: 170,
          customData: {
            trailerURL:
              "https://cpaas-videos.s3.amazonaws.com/cpaasuploads/demo/kongtrailer.mp4",
            yearOfRelease: 2011,
          },
          id: "5ff748b1c609e3004ae9a487",
        },
        {
          genres: [],
          tags: [],
          likes: 2,
          isFreeContent: false,
          language: [],
          country: ["Global"],
          excludedCountries: [],
          isEpisode: false,
          subtitle: "",
          gallery: {
            "16x9":
              "https://cpaas-tentkotta-public.s3.us-west-2.amazonaws.com/16x9.jpg",
            "1x1":
              "https://cpaas-tentkotta-public.s3.us-west-2.amazonaws.com/1x1.jpeg",
            "4x3":
              "https://cpaas-tentkotta-public.s3.us-west-2.amazonaws.com/640x480.jpeg",
            "3x2":
              "https://cpaas-tentkotta-public.s3.us-west-2.amazonaws.com/3x2.png",
          },
          title: "Film 6",
          permaLink: "/content/film-6",
          description:
            "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
          duration: "3hr 5min",
          runtime: 170,
          customData: {
            trailerURL:
              "https://cpaas-videos.s3.amazonaws.com/cpaasuploads/demo/kongtrailer.mp4",
            yearOfRelease: 2020,
          },
          id: "5ff75ceed1e02d004ac35a02",
        },
        {
          genres: [
            {
              title: "Thriller",
              id: "6062215db5ea5a48d12d5c8f",
            },
          ],
          tags: [],
          likes: 2,
          isFreeContent: false,
          language: [],
          country: ["Global"],
          excludedCountries: [],
          isEpisode: false,
          subtitle: "",
          gallery: {
            "16x9":
              "https://cpaas-tentkotta-public.s3.us-west-2.amazonaws.com/16x9.jpg",
            "1x1":
              "https://cpaas-tentkotta-public.s3.us-west-2.amazonaws.com/1x1_white.png",
            "4x3": "",
            "3x2": "",
          },
          title: "Film 3",
          permaLink: "/content/film-3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          duration: "3hr 0min",
          runtime: 170,
          customData: {
            trailerURL:
              "https://cpaas-videos.s3.amazonaws.com/cpaasuploads/demo/kongtrailer.mp4",
            yearOfRelease: 1994,
          },
          id: "5ff7ff3ad9219a0050c51054",
        },
        {
          genres: [
            {
              title: "Thriller",
              id: "6062215db5ea5a48d12d5c8f",
            },
          ],
          tags: [],
          likes: 0,
          isFreeContent: false,
          language: [],
          country: ["Global"],
          excludedCountries: [],
          isEpisode: false,
          subtitle: "",
          gallery: {
            "16x9":
              "https://cpaas-tentkotta-public.s3.us-west-2.amazonaws.com/16x9.jpg",
            "1x1":
              "https://cpaas-tentkotta-public.s3.us-west-2.amazonaws.com/1x1.jpeg",
            "4x3":
              "https://cpaas-tentkotta-public.s3.us-west-2.amazonaws.com/640x480.jpeg",
            "3x2":
              "https://cpaas-tentkotta-public.s3.us-west-2.amazonaws.com/3x2.png",
          },
          title: "Film 10",
          permaLink: "/content/film-10",
          description:
            "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
          duration: "2hr 5min",
          runtime: 170,
          customData: {
            trailerURL:
              "https://cpaas-videos.s3.amazonaws.com/cpaasuploads/demo/kongtrailer.mp4",
            yearOfRelease: 2012,
          },
          id: "5ff7548d8c8d1000502eb695",
        },
      ],
      isSeries: false,
      tags: [],
      _id: "6074928fc021862704037f35",
      title: "TK's Picks",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      gallery: {
        "16x9":
          "https://cpaas-tentkotta-public.s3.us-west-2.amazonaws.com/16x9.png",
        "1x1":
          "https://cpaas-tentkotta-public.s3.us-west-2.amazonaws.com/400x400.png",
        "4x3":
          "https://cpaas-tentkotta-public.s3.us-west-2.amazonaws.com/640x480.jpeg",
        "3x2":
          "https://cpaas-tentkotta-public.s3.us-west-2.amazonaws.com/3x2.png",
      },
      permaLink: "/category/tk-picks",
      customData: [],
    },
  };
  let gallery = dummyData?.result?.gallery;
  let permaLink = dummyData?.result?.permaLink;
  let contentId = dummyData?.result?._id;
  let title = dummyData?.result?.title;
  let description = dummyData?.result?.description;
  let certificate = "";
  let genres = "";
  let languages = "";
  let noContentFound = false;
  let episodes = dummyData.result.content;

  useEffect(() => {
    if (permaLink) {
      history.push(permaLink);
    }
  }, [permaLink]);
  // let {
  //   loading,
  //   title,
  //   description,
  //   gallary,
  //   genres,
  //   languages,
  //   noContentFound,
  //   duration,
  //   yearOfRelease,
  //   trailerURL,
  //   contentId,
  //   likes,
  //   certificate,
  //   isFreeContent,
  // } = Contentdetailsselector();
  const api_key = "df1a8a2aad5fbba70d7851155c59e9f7";
  let [isSignedIn] = useAuthStatus();
  const [movieDetails, setDetails] = useState();
  // const [detailShow, setShow] = useState(1);
  const base_url = "https://api.themoviedb.org/3/movie/";
  let director = [];
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
  // const permalink = window.location.pathname;

  const image_base_url = "https://image.tmdb.org/t/p/original/";

  // media query display
  const breakpoint = {
    sm: useMediaQuery("(max-width: 576px)"),
    md: useMediaQuery("(min-width: 768px)"),
    lg: useMediaQuery("(min-width:1200px)"),
    xl: useMediaQuery("(max-width: 1440px)"),
  };

  // useEffect(() => {
  //   if (isSignedIn) {
  //     return dispatch(
  //       contentdetailsAction.contentdetails(permalink, contentId)
  //     );
  //   }
  //   return dispatch(contentdetailsAction.contentdetails(permalink));
  // }, []);

  const ContentDetailsState = {
    contentId,
    isSignedIn,
    movieDetails,
    episodes,
    crew,
    director,
    production,
    certificate,
    writing,
    opts,
    permaLink,
    image_base_url,
    breakpoint,
    movie_id,
    title,
    description,
    gallery,
    genres,
    languages,
    noContentFound,
    // duration,
    // yearOfRelease,
    // trailerURL,
    // likes,
    // isFreeContent,
    isSignIn,
  };

  // if (loading) {
  //   return (
  //     <LoadingSpinner
  //     // page={"content"}
  //     />
  //   );
  // }
  return (
    <Contentdetailscontext.Provider value={ContentDetailsState}>
      <>
        <ContentDetailsPageLayout />
        {process.env.REACT_APP_THEMETYPE !== "classic" ? (
          <SeriesDetails />
        ) : (
          <HeroBanner />
        )}
      </>
    </Contentdetailscontext.Provider>
  );
};
