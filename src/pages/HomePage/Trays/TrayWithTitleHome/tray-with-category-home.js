import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import pathOr from "ramda/src/pathOr";
import { TrayWithTextContext } from "../../../../context/tray-with-title-context.js";
import TrayWithTitle from "../../../../components/TrayComponent/TrayWithTitle";
import { useMediaQuery } from "../../../../components/Header/viewportHook";
// import { analyticsService } from "../../../../services/analyticsapi.service";
import { __parseThemeSelector } from "../../../../selectors/themestyleselector";
import { GetTrendingTrayContent } from "../../../../selectors/homecontentselector";
export const TrayWithTextConsumer = () => {
  return (
    <TrayWithTextContext.Consumer>
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
        handleOnCardClick,
        primaryTxtColor,
      }) => (
        <>
          <TrayWithTitle
            breakpoint={breakpoint}
            dispatch={dispatch}
            history={history}
            themes={themes}
            icons={icons}
            primBtCol={primBtCol}
            pFontClr={pFontClr}
            title={title}
            traycontent={traycontent}
            handleOnCardClick={handleOnCardClick}
            primaryTxtColor={primaryTxtColor}
            classnameparam="traytitlelarge"
          />
        </>
      )}
    </TrayWithTextContext.Consumer>
  );
};

export default function TrayWithTitleCategory() {
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
  const { loading, title, content } = GetTrendingTrayContent("category");
  const traycontent = content;
  const icons = pathOr("", ["icons"])(themes);
  // Destructure the theme props
  const {
    // bgColor,
    primaryBtnColor: primBtCol,
    primaryFontColor: pFontClr,
    // secondaryFontColor: sFontClr,
  } = pathOr({}, ["colors"], themes);

  const handleOnCardClick = ({ id, permalink }) => {
    // analyticsService.contentalaytics("content", "play_started", id);
    return permalink
      ? history.push(permalink)
      : history.push("/content/film-1");
    // return permalink ? history.push(`content/${permalink} `) : null;
  };
  const TrayWithTextState = {
    breakpoint,
    dispatch,
    history,
    themes,
    icons,
    primBtCol,
    pFontClr,
    title,
    traycontent,
    handleOnCardClick,
    primaryTxtColor,
  };

  return (
    <TrayWithTextContext.Provider value={TrayWithTextState}>
      <TrayWithTextConsumer />
    </TrayWithTextContext.Provider>
  );
}
