import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { pathOr, equals } from "ramda";
import Home from "../Carousel/Home";
import useWindowSize from "../../helpers/viewport";
// import { analyticsService } from "../../services/analyticsapi.service";

import "./style.scss";

function ContinueWatchingTray({
  filterAvailable = false,
  title = "",
  progressBar = true,
  disPlayContent = {
    header: "Continue Watching",
    content: "Start watching from where you left",
  },
  viewAll = false,
  redirecturl,
}) {
  // media query display
  const size = useWindowSize();
  const getWidth = pathOr(768, ["width"])(size);
  const history = useHistory();
  const trending = useSelector((state) =>
    pathOr(
      [],
      ["HomepageState", "pagecontent", "trendingmovies", "records"]
    )(state)
  );

  const signedInStatus = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "responseCode"])(state)
  );
  const isSignedIn = equals(200, signedInStatus);

  if (!isSignedIn) {
    return null;
  }

  const handleOnCardClick = ({ id, permalink }) => {
    // analyticsService.contentalaytics("content", "play_started", id);
    return permalink ? history.push(`content/${permalink} `) : null;
    // return history.push('/content/film-1')
  };
  if (trending && trending.length <= 0) {
    return null;
  }
  return (
    <div>
      <section className="trayInfoWrapper trayinfowrappertext" id="#trayinfo">
        <aside className="content-section">
          <hr style={{ width: "20%", position: "absolute" }} />
          {disPlayContent && disPlayContent.header && (
            <h1 className={"textSplitter hidecontent"}>
              {disPlayContent.header}
            </h1>
          )}
          {disPlayContent && disPlayContent.content && (
            <p className="hidecontent">{disPlayContent.content}</p>
          )}
          {viewAll ? (
            <>
              <hr />
              <p>
                <a href="#trayinfo" araia-label={"View all"}>
                  View all &nbsp; <span>&#62;</span>
                </a>
              </p>
            </>
          ) : null}
        </aside>
        <div className="popular-movies-mob">Continue Watching</div>
        <aside className="slider-width">
          <Home
            progressBar={progressBar}
            movies={trending}
            title={title}
            displayCard={
              getWidth < 576
                ? 2
                : getWidth <= 768
                ? 4
                : getWidth <= 950
                ? 3
                : getWidth <= 1250
                ? 4
                : 6
            }
            redirecturl={redirecturl}
            displayHoverState={true}
            smallsize={true}
            handleOnCardClick={handleOnCardClick}
          />
        </aside>
      </section>
    </div>
  );
}
export default ContinueWatchingTray;
