import React, { useEffect, useState } from "react";
// import { MovieCard } from '../searchBar/MovieCard';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import pathOr from "ramda/src/pathOr";
import { useDispatch } from "react-redux";
import LoadingSpinner from "../../frontend-library/atoms/loadingSpinner";
import { ResultsList } from "../SearchResultsList/SearchResultsListFragments/ResultsList/resultslist";
import { Container, Row } from "react-bootstrap";
import { ListMovieGlobalStyle } from "../SearchResultsList/listmoviesstyle";
import { getCategoryAction } from '../../actions/getcategory.action';
import GetCategories from '../../selectors/getcategoryselector';
import Title from "../SearchResultsList/SearchResultsListFragments/Title/title";
import { __parseThemeSelector } from '../../selectors/themestyleselector';
import { removeTrailingSlash } from "../../helpers/helper";


// import { userRatingAction } from '../../actions/userratings.action';

const Browse = ({ title }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    let currentRoute = removeTrailingSlash(pathOr("", ["pathname"])(location));
    let categoryLoading = useSelector(state => pathOr(false, ['CategoryReducer', 'loading'])(state));
    const [contentId, setcontentId] = useState('');
    const [permaLink, setPermaLink] = useState('');
    let loading = false;
    const { colors } = __parseThemeSelector();
    const { primaryTxtColor, bgColor } = colors;
    let content = [];
    if (currentRoute.toLowerCase().includes('browse')) {
        content = GetCategories();
        loading = categoryLoading;
    }
    let reqType = '';
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        for (const [key, value] of urlParams) {
            if (key.includes('id')) {
                setcontentId(value);
            } else if (key.includes('permalink')) {
                setPermaLink(value);
            }
        }
        return () => {
        }
    }, []);

    useEffect(() => {
        if (permaLink && contentId) {
            return dispatch(getCategoryAction.getCategoryCount({ permaLink, id: contentId }));
        }
    }, [contentId, permaLink])

    return loading ? (
        <LoadingSpinner />
    ) : (
        <>
            <ListMovieGlobalStyle />
            <div className="movie-list-container">
                <Container className="movie-list-content-wrapper">
                    <Row>
                        <Title
                            title={'Popular Movies Now'}
                            primaryTxtColor={primaryTxtColor}
                            bgColor={bgColor}
                        />
                    </Row>
                    <Row>
                        <ResultsList content={content} />
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Browse;
