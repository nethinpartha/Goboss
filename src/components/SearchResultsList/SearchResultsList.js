import React, { useEffect, useState } from "react";
// import { MovieCard } from '../searchBar/MovieCard';
import { useSelector } from "react-redux";
import pathOr from "ramda/src/pathOr";
import { useDispatch } from "react-redux";
import LoadingSpinner from "../../frontend-library/atoms/loadingSpinner";
import { SearchPanel } from "./SearchResultsListFragments/SearchPanel/searchPanel";
import { FilterSidenavBar } from "./SearchResultsListFragments/filtersidenav/filtersidenav";
import { ResultsList } from "./SearchResultsListFragments/ResultsList/resultslist";
import { Container, Col, Row } from "react-bootstrap";
import { ListMovieGlobalStyle } from "./listmoviesstyle";
import { getSearchSuggestionAction } from "../../actions/getSearchSuggestions.action";

const SearchResultsList = ({ title }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) =>
    pathOr(false, ["searchcontent", "loading"])(state)
  );
  const prevSearchKeyword = useSelector((state) =>
    pathOr("", ["searchcontent", "keyword"])(state)
  );
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    dispatch(getSearchSuggestionAction.getSearchSuggestions());
  }, [dispatch]);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <>
      <ListMovieGlobalStyle />
      <div className="movie-list-container">
        <Container style={{ marginBottom: "1rem" }}>
          <Row>
            <Col xs={8} md={10} lg={10} className="search-results-search-panel">
              <SearchPanel keyword={keyword} setKeyword={setKeyword} afterthreeletters={true}/>
            </Col>
            <Col xs={4} md={2} lg={2} className="search-results-filter-button">
              <FilterSidenavBar
                keyword={keyword}
                prevSearchKeyword={prevSearchKeyword}
              />
            </Col>
          </Row>
        </Container>
        <Container className="movie-list-content-wrapper">
          {/* <Row>
            <Title
              title={title}
              primaryTxtColor={primaryTxtColor}
              bgColor={bgColor}
            />
          </Row> */}
          <Row>
            <ResultsList />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SearchResultsList;
