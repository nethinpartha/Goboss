import React, { useState } from "react";
import { pathOr } from "ramda";
import { useDispatch, useSelector } from "react-redux";
import { Contentdetailsselector } from "../selectors/contentdetailsselector";

export const useVideoPlayer = () => {
  const dispatch = useDispatch();
  const [playerRef, setPlayerRef] = React.useState();
  let source;
  let currentTime;
  let { renditions, trailerURL, videoType, contentId, permaLink, runtime } =
    Contentdetailsselector();
  let wathhistoryduration = useSelector((state) =>
    pathOr(0, [
      "usercontentdetails",
      "response",
      "result",
      "watchHistory",
      "duration",
    ])(state)
  );
  let videotype = "";
  let hls = pathOr("", ["hls"])(renditions);
  if (videoType.includes("trailer")) {
    videotype = "trailer";
    source = {
      sources: [
        {
          src: trailerURL,
          type: "video/mp4",
          lowLatency: false,
        },
      ],
    };
  } else {
    source = {
      sources: [
        {
          src: hls,
          type: "application/x-mpegurl",
        },
      ],
    };
  }

  const redirectToContentPage = () => {
    return (window.location.pathname = permaLink ? permaLink : "/home");
  };

  const PresentationModeChangeEvent = (player, e) => {
    if (e && e.presentationMode === "inline") {
      playerCloseEvent(player);
    }
  };

  const onPlayerFullScreen = (e) => {
    const playerRef = e.target.player;
    if (!playerRef) return null;

    if (!playerRef.isFullscreen()) {
      // while closing the video, pause the video
      if (!playerRef.pause()) {
        playerRef.pause();
      }
      // close event
      playerCloseEvent(playerRef);
    }
  };

  const playerCloseEvent = (playerRef) => {
    return redirectToContentPage();
  };

  const onPlayerFullCheck = (player, el) => {
    const playerRef = player;
    // while closing the video, pause the video
    if (playerRef) {
      // playerRef.pause();
    }
    if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
      return redirectToContentPage();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
      return redirectToContentPage();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
      return redirectToContentPage();
    }
  };

  // initialize the player events and behavior get player reference
  const getPlayerRef = (ref, _el) => {
    const self = this;
    document.addEventListener("fullscreenchange", (event) => {
      // document.fullscreenElement will point to the element that
      // is in fullscreen mode if there is one. If there isn't one,
      // the value of the property is null.
      if (document.fullscreenElement) {
        console.log(
          `Element: ${document.fullscreenElement.id} entered full-screen mode.`
        );
      } else {
        onPlayerFullCheck(ref, _el);
      }
    });
    // Listen for the full screen change event
    setTimeout(() => {
      // ref.addEventListener("fullscreenchange", onPlayerFullScreen);
    }, 1000);
    setPlayerRef(ref);
    // ref.addEventListener("presentationmodechange", (e) => {
    //   PresentationModeChangeEvent(ref, e);
    // });
  };

  React.useEffect(() => {
    return () => {
      if (playerRef) {
        // remove all the events
        playerRef.off("fullscreenchange", onPlayerFullScreen);
      }
    };
  }, []);

  return {
    playerRef,
    source,
    getPlayerRef,
    wathhistoryduration,
    dispatch,
    contentId,
    videoType,
    runtime,
    renditions,
  };
};
