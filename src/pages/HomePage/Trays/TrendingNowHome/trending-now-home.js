import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import pathOr from "ramda/src/pathOr";
import { getByGenrer } from "../../../../components/Carousel/api/Movies";
import { TrendingTrayContext } from "../../../../context/trending-now-context";
import TrendingNowTray from "../../../../components/TrendingComponent/trendingcomponent";
import { useMediaQuery } from "../../../../components/Header/viewportHook";
// import { analyticsService } from "../../../../services/analyticsapi.service";
import { GetTrendingNowTrayContent } from "../../../../selectors/homecontentselector";

import { __parseThemeSelector } from "../../../../selectors/themestyleselector";

export const TrendingNowTrayConsumer = () => {
  return (
    <TrendingTrayContext.Consumer>
      {({
        breakpoint,
        dispatch,
        history,
        themes,
        icons,
        primBtCol,
        pFontClr,
        title,
        filtertype,
        trending,
        handleFilterClick,
        handleOnCardClick,
        primaryTxtColor,
      }) => (
        <>
          <TrendingNowTray
            breakpoint={breakpoint}
            dispatch={dispatch}
            history={history}
            themes={themes}
            icons={icons}
            primBtCol={primBtCol}
            pFontClr={pFontClr}
            primaryTxtColor={primaryTxtColor}
            title={title}
            filtertype={filtertype}
            trending={trending}
            handleFilterClick={handleFilterClick}
            handleOnCardClick={handleOnCardClick}
          />
        </>
      )}
    </TrendingTrayContext.Consumer>
  );
};

export default function TrendingNowTrayHome() {
  // media query display
  const breakpoint = {
    sm: useMediaQuery("(max-width: 576px)"),
    md: useMediaQuery("(min-width: 768px)"),
    lg: useMediaQuery("(min-width:1200px)"),
    xl: useMediaQuery("(min-width: 1440px)"),
    xxl: useMediaQuery("(min-width:2000px)"),
  };
  const { colors } = __parseThemeSelector();
  const { primaryTxtColor } = colors;

  // React redux dispatcher and selectors
  const dispatch = useDispatch();
  const history = useHistory();

  const themes = useSelector((state) => pathOr(null, ["ThemeState"])(state));
  // const trending = useSelector(state => pathOr([],
  //     ['HomepageState', 'pagecontent', 'trendingmovies', 'records'])(state));
  // const title = useSelector(state => pathOr('', ['HomepageState', 'pagecontent', 'trendingmovies', 'title'])(state));
  const filtertype = useSelector((state) =>
    pathOr("", ["HomepageState", "pagecontent", "trendingmovies", "filters"])(
      state
    )
  );
  const icons = pathOr("", ["icons"])(themes);
  const { loading, title, content } = GetTrendingNowTrayContent();
  const trending = content;
  // Destructure the theme props
  const {
    // bgColor,
    primaryBtnColor: primBtCol,
    primaryFontColor: pFontClr,
    // secondaryFontColor: sFontClr
  } = pathOr({}, ["colors"], themes);

  const handleFilterClick = (value) => {
    // getByGenrer(`${value}`).then(
    //     res => {
    //         dispatch({ type: 'HOME_PAGE_CONTENT', ...{ payload: res } })
    //     }
    // );
  };

  const handleOnCardClick = ({ id, permalink }) => {
    // return history.push('/content/film-1')
    return permalink
      ? history.push(permalink)
      : history.push("/content/film-1");
  };

  const TrendingNowState = {
    breakpoint,
    dispatch,
    history,
    themes,
    icons,
    primBtCol,
    pFontClr,
    primaryTxtColor,
    title,
    filtertype,
    trending,
    handleFilterClick,
    handleOnCardClick,
  };

  return (
    <TrendingTrayContext.Provider value={TrendingNowState}>
      <TrendingNowTrayConsumer />
    </TrendingTrayContext.Provider>
  );
}
