import React, { useState } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Input from "./Input";
// import ListMovies from '../SearchResultsList/SearchResultsList';
import * as Movies from "../Carousel/api/Movies";
import { searchActions } from "../../actions/searchactions";
import { searchcontentAction } from "../../actions/searchcontent.action";
import { useMediaQuery } from "../Header/viewportHook";
import pathOr from "ramda/src/pathOr";
import "./style.scss";

export const NavBar = ({
  onSearchMovies,
  onCollapseInputHandler,
  onExpandInputHandler,
  placeholder = "Search",
}) => {
  const themes = useSelector((state) => state.ThemeState);

  const { icons } = themes;
  const searchIcon = pathOr("", ["search"])(icons);

  return (
    <>
      <Input
        searchIcon={searchIcon}
        placeholder={placeholder}
        onEnterPressed={(query) => onSearchMovies(query)}
        onCollapseInputHandler={() => onCollapseInputHandler()}
        onExpandInputHandler={() => onExpandInputHandler()}
      />
    </>
  );
};

const NavBarComponent = ({ placeholder }) => {
  const [fetchedMovies, setfetchedMovies] = useState([]);
  const [isInputClosed, setInputClosed] = useState(true);
  const [avatarPhoto, setAvatarPhoto] = useState("");
  const [movieSearched, setMovieSeached] = useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const doSearch = (query) => {
    setMovieSeached(true);
    dispatch(searchcontentAction.SearchContent({ keyword: query }));
  };

  return (
    <>
      {pathname !== "/search" && (
        <NavBar
          onSearchMovies={(query) => doSearch(query)}
          onCollapseInputHandler={() => setInputClosed(true)}
          onExpandInputHandler={() => setAvatarPhoto(false)}
          placeholder={placeholder}
        />
      )}
      {movieSearched ? (
        <Route
          exact
          path="/*"
          render={() => {
            return <Redirect to="/search" />;
          }}
        />
      ) : null}
    </>
  );
};

export default NavBarComponent;
