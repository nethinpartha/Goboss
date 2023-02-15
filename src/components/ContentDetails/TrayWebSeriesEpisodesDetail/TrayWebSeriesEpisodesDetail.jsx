import React, { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { pathOr } from "ramda";
import { Tabs, Tab } from "react-bootstrap";

import useAuthStatus from "../../../hooks/useAuthStatus";
import { useSelector } from "react-redux";
import UserInfoSelector from "../../../selectors/getuserinformationselector";
import { showModalComAction } from "../../../actions/showmodal.action";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import CastDetails from "../CastDetails/CastDetailsCarousalView";
import { Contentdetailsselector } from "../../../selectors/contentdetailsselector";
function TrayWebSeriesEpisodesDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  let { cast } = Contentdetailsselector();
  const [key, setKey] = useState("episodes");
  const { pathname } = useLocation();
  let dummyData;

  let userAccessToken = Cookies.get("userAccessToken") || "";
  dummyData = {
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

  const contentDetails = useSelector((state) =>
    pathOr({}, ["ContentDetails", "response"])(state)
  );

  const contentItemType = pathOr("", ["itemDetails", "itemType"])(
    contentDetails
  );

  // const episodes = pathOr(
  //   [],
  //   ["itemDetails", "seasons", "0", "episodes"]
  // )(contentDetails);
  const episodes = dummyData.result.content;
  const trayWithContentDetails = episodes;
  let TrayName = "Episodes";

  let { isSubscribed } = UserInfoSelector();
  let [isSignedIn] = useAuthStatus();
  const isVerified = useSelector((state) =>
    pathOr("", ["UserInformation", "response", "result", "isVerified"])(state)
  );

  let isEmailVerification = useSelector((state) =>
    pathOr(false, ["ThemeState", "isEmailVerification"])(state)
  );
  let isSubscription = useSelector((state) =>
    pathOr(false, ["ThemeState", "isSubscription"])(state)
  );
  const handleClick = (videotype = "video", contentId = "") => {
    if (videotype.includes("trailer")) {
      dispatch({ type: "PLAYER_VIDEO_TYPE", videotype });
      return history.push(`/player`);
    }
    if (!isSignedIn) {
      dispatch({ type: "RESET_SIGIN" });
      dispatch({ type: "EMAIL_ADDRESS_RESET" });
      dispatch({ type: "RESET_USER_INFORMATION" });
      history.push("/signin", { from: pathname });
      return;
    }

    if (isEmailVerification === false) {
      if (
        isVerified === true &&
        isSubscription === true &&
        isSubscribed === true
      ) {
        dispatch({ type: "PLAYER_VIDEO_TYPE", videotype });
        return history.push(`/player`);
      } else if (isSubscription === true && isSubscribed === false) {
        dispatch(showModalComAction.ShowModal("membership"));
      }
    } else if (isEmailVerification === true) {
      if (isVerified === false) {
        dispatch(showModalComAction.ShowModal("toverifyemail"));
        return;
      } else if (isVerified === true && isSubscribed === false) {
        dispatch(showModalComAction.ShowModal("membership"));
      } else if (isVerified === true && isSubscribed === true) {
        dispatch({ type: "PLAYER_VIDEO_TYPE", videotype });
        return history.push(`/player`);
      }
    }

    if (isSubscription === false && isSignedIn) {
      if (isEmailVerification === true && isVerified === true) {
        dispatch({ type: "PLAYER_VIDEO_TYPE", videotype });
        return history.push(`/player`);
      } else if (isEmailVerification === true && isVerified === false) {
        dispatch(showModalComAction.ShowModal("toverifyemail"));
        return;
      }
    } else if (isSubscription === true && isSignedIn) {
      if (isSubscribed === false) {
        dispatch(showModalComAction.ShowModal("membership"));
      } else if (isSubscribed === true && isEmailVerification === false) {
        dispatch({ type: "PLAYER_VIDEO_TYPE", videotype });
        return history.push(`/player`);
      } else if (isSubscribed === false) {
        if (isVerified === false && isEmailVerification === true) {
          dispatch(showModalComAction.ShowModal("toverifyemail"));
          return;
        }
        if (isVerified === true) {
          dispatch({ type: "PLAYER_VIDEO_TYPE", videotype });
          return history.push(`/player`);
        }
      }
    }
  };

  return (
    <div className="main ">
      <Tabs
        fluid
        className="cast-episodes-tray"
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        fill
      >
        {cast.length > 0 ? (
          <Tab eventKey="cast" title="Cast">
            {key === "cast" ? <CastDetails /> : null}
          </Tab>
        ) : null}
        {dummyData?.result?.content?.length > 0 && (
          <Tab eventKey="episodes" title="Episodes">
            {key === "episodes" ? (
              <div className="episodes-carousel-setup">
                {/* <div className="contentDetails_trayname">{TrayName}</div> */}

                <Carousel
                  additionalTransfrom={0}
                  arrows
                  autoPlaySpeed={3000}
                  centerMode
                  className="carousel-tag"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite={false}
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  responsive={{
                    desktop: {
                      breakpoint: {
                        max: 1440,
                        min: 1024,
                      },
                      items: 5,
                      partialVisibilityGutter: 40,
                    },
                    superLargeDesktop: {
                      breakpoint: {
                        max: 2560,
                        min: 1440,
                      },
                      items: 7,
                      partialVisibilityGutter: 40,
                    },
                    mobile: {
                      breakpoint: {
                        max: 425,
                        min: 0,
                      },
                      items: 1,
                      partialVisibilityGutter: 20,
                    },
                    tablet: {
                      breakpoint: {
                        max: 1024,
                        min: 464,
                      },
                      items: 4,
                      partialVisibilityGutter: 30,
                    },
                  }}
                  showDots={false}
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                >
                  {trayWithContentDetails && trayWithContentDetails.length ? (
                    trayWithContentDetails.map((each, i) => (
                      <div
                        className="main-div position-relative"
                        style={{ cursor: "pointer" }}
                        key={i}
                        onClick={() => {
                          history.push(`${each.permaLink}`);
                          return window.location.reload();
                        }}
                      >
                        <div className="img-div">
                          <img src={each && each.gallery["1x1"]} alt="" />
                        </div>
                        <div className="content-div">
                          <p>{(each && each.title) || ""}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>NO </div>
                  )}
                </Carousel>
              </div>
            ) : null}
          </Tab>
        )}
      </Tabs>
    </div>
  );
}

export { TrayWebSeriesEpisodesDetail };
