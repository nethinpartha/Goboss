import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import TrayWithFilter from "../../../TrayComponentFilter/tray-with-filter";
import { useMediaQuery } from "../../../Header/viewportHook";
import { getByGenrer } from "../../../Carousel/api/Movies";
import pathOr from "ramda/src/pathOr";

const TrayWithFilterContext = React.createContext("");

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
            trending={traycontent}
            filtertype={filtertype}
            handleFilterClick={handleFilterClick}
          />
        </>
      )}
    </TrayWithFilterContext.Consumer>
  );
}

export default function TrayWithTitleHome() {
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

  const themes = useSelector((state) => pathOr(null, ["ThemeState"])(state));
  const traycontent = useSelector((state) =>
    pathOr(
      [],
      ["HomepageState", "pagecontent", "trendingmovies", "records"]
    )(state)
  );
  const title = useSelector((state) =>
    pathOr("", ["HomepageState", "pagecontent", "trendingmovies", "title"])(
      state
    )
  );
  const icons = pathOr("", ["icons"])(themes);
  const filtertype = useSelector((state) =>
    pathOr("", ["homepageRducer", "pagecontent", "trendingmovies", "filters"])(
      state
    )
  );
  // Destructure the theme props
  const {
    // bgColor,
    primaryBtnColor: primBtCol,
    primaryFontColor: pFontClr,
    // secondaryFontColor: sFontClr
  } = pathOr({}, ["colors"], themes);

  const handleFilterClick = (value) => {
    // getByGenrer(`${value}`).then((res) => {
    //   dispatch({ type: "HOME_PAGE_CONTENT", ...{ payload: res } });
    // });
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
  };
  return (
    <TrayWithFilterContext.Provider value={TrayWithFilterState}>
      {traycontent && traycontent.length > 0 && <TrayWithFilterWrapper />}
    </TrayWithFilterContext.Provider>
  );
}
