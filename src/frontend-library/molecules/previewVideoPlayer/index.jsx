import React, { useEffect, useState, createRef } from "react";
import { Image } from "react-bootstrap";
import "./style.scss";
import muteButton from "./icons/mute.png";
import unmuteButton from "./icons/unmute.png";

function VideoPreview({
  config,
  videoConfigStyle,
  displayposter = "",
  id,
  dispalaycls,
  setAutoPlay,
  rstCurrTime,
}) {
  const [enableAutoPlayDelay, setAutoPlayinterval] = useState(true);
  const [mute, setMute] = useState(false);
  const videoRef = createRef();

  useEffect(() => {
    if (setAutoPlay) {
      setAutoPlayinterval(true);
      let videoPromPlay = videoRef.current.play();
      if (videoPromPlay !== undefined) {
        videoPromPlay
          .then((_) => {
            //Automatic playback started!
          })
          .catch((error) => {
            // Auto play prevented
            // show paused video
          });
      }
    }
    let timer;
    if (enableAutoPlayDelay) {
      try {
        timer = setTimeout(function () {
          let videoElement = document.getElementById("playvideo");
          if (videoElement) {
            let videoPromise = document.getElementById("playvideo").play();
            if (videoPromise !== undefined) {
              videoPromise
                .then((_) => {
                  //Automatic playback started!
                })
                .catch((error) => {
                  // Auto play prevented
                  // show paused video
                });
            }
          }
        }, 2000);
      } catch (e) {
        throw new Error("cannot play video if component not mounted");
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const defaultStyle = {
    position: "absolute",
    width: "100%",
    left: "50%",
    top: "50%",
    height: "100%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
    display: "block",
  };

  const muteCustom = (e) => {
    const videoPlayer = document.getElementById(id);
    const videoElement = videoPlayer.querySelector(".video-js")  ?  videoPlayer.querySelector(".video-js") :  videoPlayer.querySelector(".video-js-hover") 

    e.preventDefault();
    e.stopPropagation();

    if (videoElement != null) {
      if (videoElement.muted) {
        videoElement.muted = false;
        setMute(true);
      } else {
        videoElement.muted = true;
        setMute(false);
      }
    }
  };

  const videos = document.getElementsByTagName("video");
  function checkScroll() {
    var fraction = 0.7;

    for (var i = 0; i < videos.length; i++) {
      var video = videos[i];
      var x = video.offsetLeft,
        y = video.offsetTop,
        w = video.offsetWidth,
        h = video.offsetHeight,
        r = x + w, //right
        b = y + h, //bottom
        visibleX,
        visibleY,
        visible;
      visibleX = Math.max(
        0,
        Math.min(
          w,
          window.pageXOffset + window.innerWidth - x,
          r - window.pageXOffset
        )
      );
      visibleY = Math.max(
        0,
        Math.min(
          h,
          window.pageYOffset + window.innerHeight - y,
          b - window.pageYOffset
        )
      );
      visible = (visibleX * visibleY) / (w * h);
      if (visible > fraction) {
        video.play();
      } else {
        video.pause();
      }
    }
  }
  window.addEventListener("scroll", checkScroll, false);

  return (
    <div className="video-container" id={id}>
      <div
        className="video-Wrappercontainer"
        onMouseOver={(e) => {
          if (rstCurrTime) {
            // reset the current time to zero again
            e.target.currentTime = 0;

            let videoPromPlay = videoRef.current.play();
            if (videoPromPlay !== undefined) {
              videoPromPlay
                .then((_) => {
                  //Automatic playback started!
                })
                .catch((error) => {
                  // Auto play prevented
                  // show paused video
                });
            }
          }
        }}
        onMouseOut={(e) => {
          if (id !== "banner-video-player") {
            if (rstCurrTime) {
              let videoPromPause = videoRef.current.pause();
              if (videoPromPause !== undefined) {
                videoPromPause
                  .then((_) => {
                    //Automatic playback started!
                  })
                  .catch((error) => {
                    // Auto play prevented
                    // show paused video
                  });
              }
            }
          }
        }}
      >
        <video
          ref={videoRef}
          loop
          controlsList="nofullscreen nodownload noremoteplayback"
          disablePictureInPicture
          className={dispalaycls ? "videoplayback video-js" : "video-js-hover"}
          muted
          style={videoConfigStyle ? videoConfigStyle : { ...defaultStyle }}
          id={id ? `${id}` : "playvideo"}
        >
          <source
            src={
              config && config.url
                ? config.url
                : "https://giant.gfycat.com/VerifiableTerrificHind.mp4"
            }
            type="video/mp4"
          />
        </video>

        <div className="player-controls" style={{zIndex:2}}>
          <div className="inner-player-controls">
            <button className="btn-mute" onClick={muteCustom}>
              {mute ? (
                <Image src={muteButton} alt="mute-icon" />
              ) : (
                <Image src={unmuteButton} alt="unmute-icon" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPreview;
