import React, { useEffect } from "react";
import Cookies from "js-cookie";
import moment from "moment";
import { pathOr } from "ramda";
import { contentdetailsAction } from "../../actions/contentdetails.action";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Player from "../../components/Player/Player";
import { type } from "../../constants/contentdetails.constants";
import { useVideoPlayer } from "../../hooks/useVideoPlayer";
import { __parseThemeSelector } from "../../selectors/themestyleselector";
import { watchDurationAction } from "../../actions/watchduration.action";
import ParseCurrentTime from "../../helpers/parseCurrentTime";
import LoadingSpinner from "../../frontend-library/atoms/loadingSpinner";
import "./VideoPage.css";

require("videojs-contrib-quality-levels");
// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require("videojs-http-source-selector");

function VideoPage({ props }) {
  const {
    getPlayerRef,
    wathhistoryduration,
    dispatch,
    contentId,
    videoType,
    runtime,
    renditions,
  } = useVideoPlayer();
  const { playerCss } = __parseThemeSelector();
  const history = useHistory();
  let videoSettingSelected = useSelector((state) =>
    pathOr("", ["VideoSettingSelectedReducer"])(state)
  );
  const [playlist, setPlaylist] = React.useState([]);
  const [tracks, setTracks] = React.useState([]);
  const [isPaused, setPaused] = React.useState(false);

  let hls = pathOr("", ["hls"])(renditions);
  const URLs = useSelector((state) =>
    pathOr("", ["ContentDetails", "response", "result"])(state)
  );
  console.log(URLs);
  const startOver = history?.location?.state?.startOver;
  console.log(startOver);
  let isQuality;

  if (URLs?.renditions) {
    if (videoSettingSelected.selectedValue === "Stereo") {
      hls = URLs?.renditions.stereo;
    }
    if (videoSettingSelected.selectedValue === "Dolby") {
      hls = URLs?.renditions["dolby5.1"];
    }

    if (videoSettingSelected.selectedValue === "4K") {
      hls = URLs?.renditions["4k"];
    }
    if (videoSettingSelected.selectedValue === "Dolby Atmos") {
      hls = URLs?.renditions.dolbyatmos;
    }
  }

  function handleWatchHistoryCall() {
    if (typeof window !== "undefined" && window.videoJsPlayer) {
      let currentTime = window.videoJsPlayer.currentTime();

      console.log(currentTime / 60, contentId);

      dispatch(
        watchDurationAction.watchDuration({
          contentId: contentId,
          duration: currentTime / 60,
        })
      );
    }
  }
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let isTrailer = urlParams.has("isTrailer");
    if (!isTrailer) {
      const updateInterval = setInterval(handleWatchHistoryCall, 100000);
      return () => {
        clearInterval(updateInterval);
      };
    }
  }, []);

  React.useEffect(() => {
    if (videoType.includes("trailer")) {
      let trailerURL = Cookies.get("trailerURL");

      if (trailerURL) {
        setPlaylist([
          {
            src: trailerURL,
            type: "video/mp4",
            lowLatency: false,
          },
        ]);
      } else {
        history.goBack();
      }
    } else if (hls || URLs) {
      setPlaylist([
        {
          src: hls,
          type: "application/x-mpegurl",
        },
      ]);
      if (URLs[0] && URLs[0].subtitleUrl) {
        setTracks([
          {
            src: URLs[0].subtitleUrl.replace(".srt", ".vtt") || "",
            kind: "captions",
            srclang: "en",
            default: true,
            label: "English",
          },
        ]);
      }
    }
  }, [URLs]);
  useEffect(() => {
    return () => {
      Cookies.set("trailerURL", "", {
        expires: 365,
      });
      dispatch({ type: type.MOVIE_URL_RESET });
    };
  }, []);

  function convertToSeconds(hours, minutes, seconds) {
    return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
  }

  function timeUpdate(player) {
    let isPaused = player.paused();
    setPaused(isPaused);
  }

  function onPlayerReady(player) {
    if (player) {
      player.requestFullscreen();
      player.play();
      player.httpSourceSelector();
      let qualityLevels = player.qualityLevels();

      qualityLevels.on("change", function () {
        let qual = qualityLevels.levels_[qualityLevels.selectedIndex].height;
        isQuality = qual;
      });
      player.on("timeupdate", () => timeUpdate(player));
      player.on("fullscreenchange", () => {
        if (!player.isFullscreen()) {
          player.requestFullScreen();
        }
      });
      if (runtime) {
        const [hours, minutes, seconds] = runtime.split(":");
        if (startOver) {
          player.currentTime("00:00:00");
        } else {
          player.currentTime(convertToSeconds(hours, minutes, seconds));
        }
      }
    }
  }

  return (
    <>
      <main className="SignUp-background">
        <div>
          {playerCss && (
            <link rel="stylesheet" type="text/css" href={playerCss} />
          )}
          {playlist && playlist.length > 0 ? (
            <Player
              options={{
                autoplay: true,
                controls: true,
                controlBar: {
                  pictureInPictureToggle: false,
                },
                playbackRates: [0.5, 1, 1.25, 1.5, 2],
                responsive: true,
                fluid: true,
                fill: true,
                userActions: {
                  click: false,
                },
                preload: "auto",
                nativeControlsForTouch: false,
                fullscreenToggle: true,
                pictureInPictureToggle: false,
                techOrder: ["html5"],
                // sources: source.sources,
                sources: playlist,
                html5: {
                  nativeTextTracks: false,
                },
              }}
              setPlayerRef={getPlayerRef}
              onPlay={() => {
                console.log("The player has started playing.");
              }}
              wathhistoryduration={wathhistoryduration}
              runtime={runtime}
              durationChange={handleWatchHistoryCall}
              openInFullView={true}
              videoType={videoType}
              onReady={onPlayerReady}
              isPaused={isPaused}
            />
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </main>
    </>
  );
}

export { VideoPage };
