import React, { useEffect } from "react";
import { pathOr } from 'ramda';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import NavBarComponent from "../../../searchBar/NavBar";
import Autosuggest from '../AutoSuggestion';
import { searchcontentAction } from "../../../../actions/searchcontent.action";


export const SearchPanel = ({ setKeyword, keyword, afterthreeletters }) => {
  const dispatch = useDispatch();
  const searchSuggestionList = useSelector(state => pathOr([], ['SearchSuggestion', 'response', 'result'])(state));

  function doSearch(query) {
    return dispatch(searchcontentAction.SearchContent({ keyword: query }));
  };

  return (
    <>
      <Autosuggest
        searchSuggestionList={searchSuggestionList}
        doSearch={doSearch}
        setKeyword={setKeyword}
        keyword={keyword}
        afterthreeletters={afterthreeletters}
      />
      {/* <NavBarComponent
        placeholder={"Search Movies, Cast Crew, Genre, Originals"}
      /> */}
    </>
  );
};
