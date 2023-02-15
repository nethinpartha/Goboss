import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";

const JumbotronLayout = () => {
  const themes = useSelector((state) => pathOr("", ["ThemeState"])(state));
  const themeName = pathOr("", ["themeName"])(themes);
  const bgcolor = useSelector((state) =>
    pathOr("#131722", ["ThemeState", "colors", "bgColor", "color", "value"])(
      state
    )
  );
  return (
    <>
      <Global
        styles={css`
        .${themeName}-Home-Page .jumbotroncarddetails {
          margin-left: 5rem;
          top: 30rem;
        }
          .jumbotroncarddetails,
          .jumbtronsubscribe {
            border:none;
            background: transparent;
            width: 30rem;
          }

          .jumbotron-title {
            text-transform: uppercase;
            margin: 18px 0;
            font-weight: bold;
            color: #ffffff;
            font-size: 40px;
          }

          .jumbotronwrapper {
            background-repeat: no-repeat, repeat;
            background-position: center;
            background-size: cover;
            padding: 0;
            margin:0;
            display: flex;
            position:relative;
            height: 43rem;
            .player-controls{
              bottom:0;      
            }
            .btn-mute{
              height: 1rem;
            }
          }

          .subscription {
            margin-bottom: 2rem;
            font-weight: 800;
            color: #ffffff;
            text-transform: capitalize;
            font-size: 26px;
          }

          .addtolisttxt {
            margin-left: 1rem;
            text-transform: uppercase;
            color: #ffffff;
            font-size: 14px;
          }

          .addtolistimg {
            height: 17px;
          }

          .addToList {
            transition: all 0.2s ease-in-out; 
            padding: 1rem 3rem;
            border-radius: 10px;
            border: 1px solid #ffffff;
          }
          .addToList:hover {
            transform: scale(1.1);
          }

          .btnTxt {
            text-transform: uppercase;
            font-weight: bold;
            color: #000000;
            font-size: 17px;
          }

          .imageCont {
            width: 24px;
            height: 24px;
            padding-right: 6px;
          }
          .play {
            transition: all 0.2s ease-in-out
          }
          .play: hover {
            transform: scale(1.1);
          }

          .play,
          .play:active,
          .play:hover,
          .play:focus {
            background-color: #ffffff;
            margin-right: 1rem;
            border: none;
            border-radius: 10px;
            padding: 1rem 3rem;
          }

          .subtitles {
            color: #ffffff;
            font-size: 14px;
            margin: 18px 0;
            margin-bottom: 4rem;
            text-transform: uppercase;
            font-weight: 300;
          }

          @media screen and (max-width: 1440px) {
          .jumbotronwrapper{
            height: 32rem;
         }
         .${themeName}-Home-Page .jumbotroncarddetails {
          top: 19rem;
        }
        }

          // landscape mode
          @media all and (orientation: landscape) and (min-width: 641px) and (max-width: 1250px) {
            .${themeName}-Home-Page .jumbotroncarddetails {
              top: 16rem;
            }
            .jumbotronwrapper{
              height: 27rem;
           }
            .jumbtronsubscribe {
              margin-top: 16% !important;
            }

            .subscription {
              font-size: 15px !important;
              margin-bottom: 0.25rem !important;
            }
            .play {
            }
            .addToList {
              padding: 0.25rem 2rem !important;
            }

            .play {
              height: 45px;
              width: 23%;
              padding: 0.25rem 2rem !important;
            }

            .row-style {
              justify-content: center;
            }

            .btnTxt {
              font-size: 14px !important;
            }

            .row-style-addtolist {
              display: contents;
            }

            .imageCont {
              width: 20px !important;
              height: 14px !important;
            }
            .addtolisttxt {
              font-size: 14px !important;
            }
            .addtolistimg {
              height: 14px !important;
            }
          }

          @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
            .home-background {
              video {
                bottom: 42% !important;
              }
              .img-wrapper {
                min-height: 50vh;
              }
              .info-section {
                bottom: 28%;
              }
            }
          }

          @media screen and (max-width: 768px) {        
            .makeStyles-root-9 {
              width: 92%;
            }
            .makeStyles-root-1 {
              width: 90% !important;
            }
            .jumbotron-title {
              font-size: 31px;
            }            

            .${themeName}-Home-Page .jumbotroncarddetails .card-title {
              font-size: 27px !important;
            }
          }
          // mobile devices
          @media screen and (max-width: 640px) {
            .${themeName}-Home-Page .jumbotroncarddetails {
              top: 8rem;
              margin-left: 2rem;
            }
            .jumbotronwrapper{
              height: 17rem;
           }
            .subscriptionbtn {
              font-size: 16px;
              margin-bottom: 1.25rem !important;
              padding: 0.5rem !important;
            }

            .imageCont {
              width: 20px !important;
              height: 14px !important;
            }

            .jumbotron-title {
              font-size: 20px;
            }
            .subtitles {
              font-size: 11px;
            }

            .jumbtronsubscribe {
              margin-top: 37% !important;
            }

            .play {
              padding: 0.25rem 2rem !important;
              border-radius: 2px;
              padding: 0.5rem 3rem;
            }

            .addToList {
              padding: 0.5rem 2rem !important;
              border-radius: 4px;
            }

            .btnTxt {
              font-size: 10px !important;
            }

            .imageCont {
              width: 25px !important;
              height: 17px !important;
            }

            .addtolisttxt {
              font-size: 10px !important;
            }

            .addtolistimg {
              height: 10px !important;
            }
          }      

          @media screen and (max-width: 320px) {
          .jumbotroncarddetails,
            .jumbtronsubscribe {
              width: 18rem;
            }
            .${themeName}-Home-Page .jumbotroncarddetails {
              margin-left: 1rem;
            }
        `}
      />
    </>
  );
};

export default JumbotronLayout;
