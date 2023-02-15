import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { pathOr } from "ramda";
import Home from "../Carousel/Home";
import { getByGenrer } from "../Carousel/api/Movies";
import useWindowSize from "../../helpers/viewport";
// import { analyticsService } from "../../services/analyticsapi.service";
import { __parseThemeSelector } from "../../selectors/themestyleselector";
import { GetTrayWithLeftSectionContent } from "../../selectors/homecontentselector";

require("./style.scss");

function TrayComponentText({
  filterAvailable = false,
  title = "",
  progressBar,
  disPlayContent = {
    header: "Popular movies to watch now",
    content: "Most watched movies by days",
  },
  viewAll = true,
  redirecturl,
}) {
  const { colors } = __parseThemeSelector();
  const { primaryTxtColor } = colors;
  // media query display
  const size = useWindowSize();
  const getWidth = pathOr(768, ["width"])(size);
  const history = useHistory();
  const [movies, setMovies] = useState({ movies: [] });
  const { content, header, subTitle, categoryPermalink, categoryId } =
    GetTrayWithLeftSectionContent();
  disPlayContent = {
    header,
    content: subTitle,
  };
  const trending = content;
  useEffect(() => {
    // clean up controller
    let isSubscribed = true;
    // getByGenrer('Horror').then(res => isSubscribed ? setMovies({ ...movies, animationMovies: trending }) : null);
    return () => (isSubscribed = false);
  }, []);

  const handleOnCardClick = ({ id, permalink }) => {
    // analyticsService.contentalaytics("content", "play_started", id);
    // return permalink ? history.push(`content/${permalink} `) : null;
    return permalink
      ? history.push(permalink)
      : history.push("/content/film-1");
  };

  if (trending && trending.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className="trayInfoWrapper trayinfowrappertext" id="#trayinfo">
        <aside className="content-section">
          {/* <hr style={{ width: '20%', position: 'absolute', color: "white" }} /> */}
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
              <p style={{ padding: "0", cursor: "pointer" }}>
                <span
                  onClick={() =>
                    history.push(
                      `/browse/popular-movies?id=${categoryId}&permalink=${categoryPermalink}`
                    )
                  }
                  aria-label={"navigate to tray section"}
                  className="gradient-text hover-btn-animation"
                >
                  View all <span>&#62;</span>
                </span>
              </p>
              {/* <hr /> */}
            </>
          ) : null}
        </aside>
        <div className="popular-movies-mob">Popular movies to watch</div>
        <aside className="slider-width">
          {/* <Home
            progressBar={progressBar}
            movies={trending}
            title={title}
            displayCard={
              getWidth < 576
                ? 2
                : getWidth <= 768
                ? 4
                : getWidth <= 1250
                ? 4
                : 6
            }
            redirecturl={redirecturl}
            displayHoverState={true}
            smallsize={true}
            handleOnCardClick={handleOnCardClick}
          /> */}
        </aside>
      </section>
    </div>
  );
}
export default TrayComponentText;
