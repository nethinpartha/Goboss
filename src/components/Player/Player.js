import React from "react";
import { PlayerLayout } from "./playerstyle";
import "video.js/dist/video-js.css";
import videojs from "video.js";
import forWard from "../../assets/icons/forward-svgrepo-com.svg";
import Play from "../../assets/icons/play-svgrepo-com.svg";
import Back from "../../assets/icons/back-icon.svg";
import Pause from "../../assets/icons/pause-svgrepo-com.svg";
import "videojs-contrib-quality-levels"; // videoJs Quality levels **
import "videojs-hls-quality-selector"; // videojs Quality Selector **
import Cookies from "js-cookie";

export const Player = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  let userAccessToken = Cookies.get("userAccessToken") || "";
  const { options, onReady, isPaused, durationChange, history, itemDetails } =
    props;
  const wrapper = document.getElementById("yourPlayerId");
  let player;

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        window.videoJsPlayer = player;
        onReady && onReady(player);
      }));
      player.on("timeupdate", durationChange);

      // You could update an existing player in the `else` block here
    } else {
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options, videoRef]);

  try {
    const getPressedKey = (event) => {
      const pressedKey = event.key;
      let action;

      const togglePlay = () => {
        isPaused ? window.videoJsPlayer.play() : window.videoJsPlayer.pause();
      };

      const rewind = () => {
        window.videoJsPlayer.currentTime(
          window.videoJsPlayer.currentTime() - 5
        ); //Subtracts 5 seconds
      };

      const forward = () => {
        window.videoJsPlayer.currentTime(
          window.videoJsPlayer.currentTime() + 5
        ); //Adds 5 seconds
      };

      const increaseVolume = () => {
        window.videoJsPlayer.volume(
          Math.min(window.videoJsPlayer.volume() + 0.05)
        ); //Increases volume by 5%
      };

      const decreaseVolume = () => {
        window.videoJsPlayer.volume(
          Math.max(window.videoJsPlayer.volume() - 0.05)
        ); //Lowers volume by 5%
      };

      const toggleMute = () => {
        console.log(window.videoJsPlayer.muted());
        window.videoJsPlayer.muted(!window.videoJsPlayer.muted());
      };

      const preventStandardHotKeyActions = (event) => {
        event.preventDefault();
        getPressedKey();
      };

      switch (pressedKey) {
        case " ":
          action = togglePlay(); //Pauses or Unpauses with Space
          break;
        case "ArrowLeft":
          action = rewind(); //Rewinds the video with the Left Arrow Key
          break;
        case "ArrowRight":
          action = forward(); //Forwards the video with the Right Arrow Key
          break;
        case "ArrowUp":
          action = increaseVolume(); //Increases volume with the Up Arrow Key
          break;
        case "ArrowDown":
          action = decreaseVolume(); //Lowers volume with the Down Arrow Key
          break;
        case "m":
          action = toggleMute(); //Toggle Mute with the 'M' Key
          break;
        case "click":
          action = togglePlay();
        case "Escape":
          return window.history.back();
        default:
          break;
      }
      if (
        pressedKey !== "Control" &&
        pressedKey !== "Alt" &&
        pressedKey !== "Shift"
      ) {
        preventStandardHotKeyActions(event); //Stops the default key behaviour like jumping the page with space.
      }
    };
    const playerFocused = () => {
      if (wrapper.contains(document.activeElement)) {
        document.addEventListener("keydown", getPressedKey);
      } else {
        document.removeEventListener("keydown", getPressedKey);
      }
    };
    const mouseOutPlayer = () => {
      //Checks if the mouse leaves the player wrapper area
      wrapper.removeEventListener("mouseleave", mouseOutPlayer);
      document.removeEventListener("keydown", getPressedKey);
    };
    const mouseInPlayer = () => {
      //Checks if the mouse is inside the player wrapper area
      document.addEventListener("keydown", getPressedKey);
      wrapper.addEventListener("mouseleave", mouseOutPlayer);
    };

    const enableShortcuts = (method) => {
      switch (method) {
        case "mouseOver": //If the param reads 'mouseOver' shortcuts are only enabled when the mouse is inside of the player.
          wrapper.addEventListener("mouseenter", mouseInPlayer);
          break;
        case "playerFocused": //If the param reads 'playerFocused' shortcuts are only enabled when the player is focused.
          document.addEventListener("focus", playerFocused, true);
          break;
        default:
          document.addEventListener("keydown", getPressedKey); //Else player shortcuts are always enabled.
      }
    };
    enableShortcuts();
  } catch (e) {
    console.log(e);
  }
  const forward = () => {
    skip(10);
  };

  const backward = () => {
    skip(-10);
  };

  const onPlay = () => {
    if (window && window.videoJsPlayer) {
      window.videoJsPlayer.pause();
    }
    if (videoRef && videoRef.current) {
      videoRef.current.pause();
    }
  };

  const onPause = () => {
    if (window && window.videoJsPlayer) {
      window.videoJsPlayer.play();
    }
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  };

  const onBack = () => {
    if (typeof window !== "undefined") {
      const player_ = window.videoJsPlayer;
      if (player_.isFullscreen()) {
        // player_.pause();
        window.history.back();
      }
      player_.pause();
    }
  };

  const skip = (time) => {
    const now = window.videoJsPlayer.currentTime();
    window.videoJsPlayer.currentTime(now + time);
  };

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
      data-vjs-player
    >
      <PlayerLayout />
      <div className="playbtnWrapper">
        <div onClick={() => backward()} className="playerRewindSvg">
          <img src={forWard} alt="icon-forWard" />
        </div>
        {!isPaused ? (
          <div onClick={() => onPlay()} className="playIcon">
            <img src={Pause} alt="icon-forWard" />
          </div>
        ) : (
          <div onClick={() => onPause()} className="playIcon">
            <img src={Play} alt="icon-forWard" />
          </div>
        )}
        <div onClick={() => forward()} className="playFFSvg">
          <img src={forWard} alt="icon-forWard" />
        </div>
      </div>
      <div onClick={() => onBack()} className="backBtn">
        <img src={Back} alt="icon-back" />
      </div>

      <video
        id="yourPlayerId"
        ref={videoRef}
        // className="video-js vjs-big-play-centered vjs-fill"
        className="video-js vjs-big-play-centered vjs-fill"
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default Player;
