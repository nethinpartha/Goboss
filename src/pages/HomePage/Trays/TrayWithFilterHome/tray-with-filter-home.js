import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import TrayWithFilter from "../../../../components/TrayComponentFilter/tray-with-filter";
import { useMediaQuery } from "../../../../components/Header/viewportHook";
import { getByGenrer } from "../../../../components/Carousel/api/Movies";
import pathOr from "ramda/src/pathOr";
import { TrayWithFilterContext } from "../../../../context/tray-with-filter-context";
// import { analyticsService } from "../../../../services/analyticsapi.service";
import { __parseThemeSelector } from "../../../../selectors/themestyleselector";
import { GetTrayFilterContent } from "../../../../selectors/homecontentselector";

function TrayWithFilterWrapper() {
  return (
    <TrayWithFilterContext.Consumer>
      {({
        breakpoint,
        dispatch,
        history,
        themes,
        icons,
        primBtCol,
        pFontClr,
        title,
        traycontent,
        filtertype,
        handleFilterClick,
        handleOnCardClick,
        primaryTxtColor,
        trayfiltercontent
      }) => (
        <>
          <TrayWithFilter
            breakpoint={breakpoint}
            dispatch={dispatch}
            history={history}
            themes={themes}
            icons={icons}
            primBtCol={primBtCol}
            pFontClr={pFontClr}
            title={title}
            trending={trayfiltercontent && trayfiltercontent.length ? trayfiltercontent : traycontent}
            filtertype={filtertype}
            handleFilterClick={handleFilterClick}
            handleOnCardClick={handleOnCardClick}
            primaryTxtColor={primaryTxtColor}
          />
        </>
      )}
    </TrayWithFilterContext.Consumer>
  );
}

export default function TrayWithFilterHome() {
  // media query display
  const breakpoint = {
    sm: useMediaQuery("(max-width: 576px)"),
    md: useMediaQuery("(min-width: 768px)"),
    lg: useMediaQuery("(min-width:1200px)"),
    xl: useMediaQuery("(max-width: 1440px)"),
  };

  // React redux dispatcher and selectors
  const dispatch = useDispatch();
  const history = useHistory();
  const { colors } = __parseThemeSelector();
  const { primaryTxtColor } = colors;
  const themes = useSelector((state) => pathOr(null, ["ThemeState"])(state));
  const { loading, title, content, filtertype } = GetTrayFilterContent();
  const traycontent = content
  const [trayfiltercontent, setTraycontent] = useState([])

  const icons = pathOr("", ["icons"])(themes);
  // Destructure the theme props
  const {
    // bgColor,
    primaryBtnColor: primBtCol,
    primaryFontColor: pFontClr,
    // secondaryFontColor: sFontClr
  } = pathOr({}, ["colors"], themes);

  const handleFilterClick = (value) => {
    var newone = []
    var newArray =traycontent.filter(function (el) {
      if(el.genres.includes(value)){
        newone.push(el)
      } 
  });
  setTraycontent(newone)
  }
  const handleOnCardClick = ({ id, permalink }) => {
    // analyticsService.contentalaytics("content", "play_started", id);
    return permalink ? history.push(permalink) : null;
    // return history.push('/content/film-1')
  };
  const TrayWithFilterState = {
    breakpoint,
    dispatch,
    history,
    themes,
    icons,
    primBtCol,
    pFontClr,
    title,
    traycontent,
    filtertype,
    handleFilterClick,
    handleOnCardClick,
    primaryTxtColor,
    trayfiltercontent
  };
  return (
    <TrayWithFilterContext.Provider value={TrayWithFilterState}>
      <TrayWithFilterWrapper />
    </TrayWithFilterContext.Provider>
  );
}
