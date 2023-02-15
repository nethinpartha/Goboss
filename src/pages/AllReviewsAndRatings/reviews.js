import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { pathOr } from 'ramda';
import { useForm } from "react-hook-form";
import {
    ListGroup,
} from "react-bootstrap";
import {
    successscreen,
} from "../../styles/layouts/component/styledcomponent/cancelmembershipstyle";
import HeaderComp from '../../components/Header/HeaderComp';
import Footer from '../../components/Footer/footer';
import GlobalStyleLayout from '../../styles/global-styles/globalStyle';
import { ratingsreview } from '../../actions/ratingreview.action';
import ReviewAndRatingsSelector from '../../selectors/reviewsandratingselector';
import LoadingSpinner from '../../frontend-library/atoms/loadingSpinner';
import { ReviewList, ReviewsAndRatingform } from '../../components/ContentDetails/JumbotronComp/ReviewsAndRatings/reviewsandratings';
import { userRatingAction } from '../../actions/userratings.action';
import { __parseThemeSelector } from '../../selectors/themestyleselector';

const ReviewAndRatingsList = () => {
    const [contentId, setcontentId] = useState('');
    const [inputs, setInputs] = useState({
        review: "",
        rating: 0,
    });
    const { colors } = __parseThemeSelector();
    const {
        bgColor,
        primaryBtnColor,
        primaryFontColor
    } = colors;
    const { handleSubmit, register, errors } = useForm();
    const dispatch = useDispatch();
    const { reviews, loading } = ReviewAndRatingsSelector();
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        for (const [key, value] of urlParams) {
            if (key.includes('id')) {
                setcontentId(value);
                dispatch(ratingsreview.ratingsreviewAAction({ contentId: value }))
            }
        }
        return () => {
        }
    }, []);

    const handleChange = (e, val) => {
        if (val) {
            setInputs({
                ...inputs,
                rating: val,
            });
        }
    }

    const onSubmit = (values) => {
        console.log(inputs.rating)
        if (values) {
            setInputs({
                ...inputs,
                review: values.review,
            });
        }
        if (inputs.rating) {
            return dispatch(
                userRatingAction.userRating({
                    rating: inputs.rating,
                    review: `${inputs.review}`,
                    contentId
                })
            );
        }
    };

    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <>
            <GlobalStyleLayout />
            <main className="resetpassword">
                <header aria-label="main header section for membership page">
                    <HeaderComp />
                </header>
                <section style={{ padding: "1rem", margin: "3rem" }}>
                    {reviews && reviews.length <= 0 ?
                        <p>No reviews are yet written for this movie</p> : (
                            <>
                                <h4 style={{ color: "#fff", textAlign: "center" }}>Reviws and ratings</h4>
                                <ListGroup.Item style={{ ...successscreen.listitem() }} >
                                    <ReviewsAndRatingform
                                        onSubmit={onSubmit}
                                        handleChange={handleChange}
                                        showTitle={false}
                                        errors={errors}
                                        setReviewAndRatingShowNav={() => { }}
                                        handleSubmit={handleSubmit}
                                        primaryBtnColor={primaryBtnColor}
                                        primaryFontColor={primaryFontColor}
                                        contentId={contentId}
                                        setShowReviewsAndRatings={() => { }}
                                        setInputs={setInputs}
                                        inputs={inputs}
                                        register={register}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item style={{ ...successscreen.listitem(), padding: "0.5rem" }}>
                                    {reviews && reviews.length > 0 ? reviews.map((review, index) => {
                                        return (<ReviewList review={review} key={`reviewList-${index}`} />)
                                    }) : null}
                                </ListGroup.Item>
                            </>)
                    }
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ReviewAndRatingsList;