import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { CardStyle } from "./ratingsstyle";
import Ratings from '../../../../frontend-library/atoms/ratings/ratings';
import ReviewsAndRating from '../ReviewsAndRatings/reviewsandratings';
import { showModalComAction } from '../../../../actions/showmodal.action';
import ReviewAndRatingsSelector from '../../../../selectors/reviewsandratingselector';
import Rating from "@material-ui/lab/Rating";


export default function RatingsWrapper({
    precision = 0.5,
    readOnly = true,
    dispatch,
    isSignedIn,
    isVerified,
    isSubscription,
    isSubscribed,
    contentId,
    title
}) {
    const [showReviewsAndRatingNav, setReviewAndRatingShowNav] = useState(false);
    const [showReviewsAndRatings, setShowReviewsAndRatings] = useState(true);

    const [ratings, setRatings] = useState(0);
    const { overallRating, reviews } = ReviewAndRatingsSelector();

    const handleReviewsAndRating = (value) => {
        if (!isSignedIn) {
            dispatch({ type: 'RESET_SIGIN' });
            dispatch({ type: "EMAIL_ADDRESS_RESET" });
            dispatch({ type: "RESET_USER_INFORMATION" });
            dispatch(showModalComAction.ShowModal('signin'));
            return;
        }

        if (isSubscription === true) {
            if (isSignedIn && !isSubscribed) {
                if (!isVerified) {
                    dispatch(showModalComAction.ShowModal('toverifyemail'));
                    return;
                }
                dispatch(showModalComAction.ShowModal("membership"));
                return;
            }
        } else if (isSignedIn && isSubscription === false) {
            if (!isVerified) {
                dispatch(showModalComAction.ShowModal('toverifyemail'));
                return;
            }
        }

        return setReviewAndRatingShowNav(value)
    }
    useEffect(() => {
        setRatings(overallRating);
    }, [overallRating]);


    useEffect(() => {
        if (showReviewsAndRatingNav) {
            document.querySelector("body").style.overflow = "hidden";
            return;
        }
        document.querySelector("body").style.overflow = "overlay";
    }, [showReviewsAndRatingNav]);

    return (
        <Card style={CardStyle.card()}>
            <Card.Body style={CardStyle.card()}>
                {ratings && ratings > 0 ? < Col
                    lg={2}
                    style={CardStyle.gutterPadding()}
                >
                    <Ratings
                        value={ratings}
                        precision={0.5}
                        readOnly={true}
                        style={CardStyle.reviewAndRating()}
                        classname="ratings-content-details"
                    />
                </Col> : null}
                <Col
                    lg={4}
                    style={CardStyle.gutterPadding()}
                >
                    <span
                    // className="gradient-text"
                    >
                        <a
                            onClick={() => {
                                handleReviewsAndRating(true);
                                setShowReviewsAndRatings(true);
                            }}
                            style={CardStyle.reviewAndRating()}
                        >{'Reviews and Ratings'}
                        </a>
                    </span>
                </Col>
                <ReviewsAndRating
                    showReviewsAndRatingNav={showReviewsAndRatingNav}
                    setReviewAndRatingShowNav={setReviewAndRatingShowNav}
                    handleReviewsAndRating={handleReviewsAndRating}
                    contentId={contentId}
                    reviews={reviews}
                    showReviewsAndRatings={showReviewsAndRatings}
                    setShowReviewsAndRatings={setShowReviewsAndRatings}
                    title={title}
                />
            </Card.Body>
        </Card >
    );
}