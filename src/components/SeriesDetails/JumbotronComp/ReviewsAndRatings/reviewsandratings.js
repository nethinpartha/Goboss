import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pathOr } from 'ramda';
import { useForm } from "react-hook-form";
import { __parseThemeSelector } from '../../../../selectors/themestyleselector';
import { userRatingAction } from '../../../../actions/userratings.action';
import SideNav from "react-simple-sidenav";
import {
    Form,
    Button,
    Container,
    Row,
    Image,
    ListGroup,
} from "react-bootstrap";
import {
    updateEmailFormStyle,
    successscreen,
} from "../../../../styles/layouts/component/styledcomponent/cancelmembershipstyle";
import GlobalAccountDetailsStyle from "../../../../styles/global-styles/globalAccountDetailsStyle";
import { rules } from "../../../../helpers/rules";
import checkLogo from "../../../AccountsDetails/ChangeEmail/assets/checkLogo.png";
import Ratings from '../../../../frontend-library/atoms/ratings/ratings';

export const ReviewList = ({ review, index }) => {
    return (
        <>
            <div style={{
                padding: "0.25rem 0.5rem",
                border: "1px solid #fff",
                borderRadius: "4px",
                marginBottom: "0.5rem"
            }}
                key={index}
            >
                <h6 style={{
                    textAlign: "left",
                    fontSize: "16px",
                    textTransform: "capitalize"
                }}>
                    <span className="gradient-text">{review.firstname && review.firstname}</span>
                    <span className="gradient-text">{` `}{review.lastname && review.lastname}</span>
                </h6>
                {review?.rating && <Ratings
                    value={review.rating}
                    precision={0.5}
                    readOnly={true}
                    classname="ratings-list"
                />}
                {review.review && review.review != "undefined" ? <p
                    style={{
                        textAlign: "left",
                        fontSize: "14px"
                    }}
                >{review.review}</p> : null}
            </div>
        </>
    )
}


const ReviewsAndRatingsList = ({
    handleReviewsAndRating,
    primaryBtnColor,
    primaryFontColor,
    reviews,
    setShowReviewsAndRatings,
    setInputs,
    inputs,
    setReviewAndRatingShowNav,
    title,
    contentId
}) => {
    let slicedElement = reviews.length > 3 ? reviews.slice(0, 3) : reviews;
    return (
        <>
            <Row
                style={{
                    marginLeft: "0.25rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textTransform: "capitalize"
                }}
            >
                <h1 style={{
                    ...updateEmailFormStyle.title(primaryFontColor),
                    marginBottom: "0",
                }}>
                    Review and rating for
                    <span className="gradient-text">{` ${title}`}</span>
                </h1>
                <div
                    style={{
                        ...updateEmailFormStyle.closeIcon(primaryFontColor),
                        marginRight: "1.5rem",
                        marginLeft: "0"

                    }}
                    className={"float-right"}
                    onClick={() => {
                        setShowReviewsAndRatings(true);
                        setReviewAndRatingShowNav(false);
                        setInputs({
                            briefinfo: "",
                            cancellationreason: "",
                        });
                    }}
                >
                    X
                </div>
            </Row>
            <ListGroup style={{ ...successscreen.listitem(), padding: "0.5rem" }}>
                <Button
                    style={updateEmailFormStyle.button(primaryBtnColor)}
                    type="submit"
                    onClick={() => {
                        handleReviewsAndRating(true);
                        setShowReviewsAndRatings(false);
                    }}
                >
                    {`ADD A Review`}
                </Button>
            </ListGroup>
            {reviews.length > 0 && <ListGroup.Item style={{ ...successscreen.listitem(), padding: "0.5rem" }}>
                <h6
                    style={{
                        color: "white",
                        paddingTop: "0.25rem",
                        fontSize: "16px",
                    }}
                >
                    {'Reviews by our users'}
                </h6>
                {reviews && reviews.length > 0 ? reviews.map((review, index) => {
                    return (<>
                        <ReviewList review={review} key={`reviewList-${index}`} index={`reviewList-${index}`} />
                    </>)
                }) : null}
                {/* {reviews.length > 0 ? <h6
                    style={{
                        textAlign: "left",
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}>
                    <a
                        href={`/reviewsandrating?&id=${contentId}`}
                        target="_blank"
                        style={{
                            color: 'primaryFontColor'
                        }}
                        rel="noopener noreferrer">
                        <span className="gradient-text">{`View All Reviews`}</span>
                    </a>
                </h6> : null} */}
            </ListGroup.Item>}
        </>
    );
};

export const ReviewsAndRatingform = ({
    handleReviewsAndRating,
    showReviewsAndRatingNav,
    setReviewAndRatingShowNav,
    primaryBtnColor,
    primaryFontColor,
    contentId,
    setShowReviewsAndRatings,
    setInputs,
    inputs,
    onSubmit,
    handleChange,
    handleSubmit,
    register,
    errors,
    error,
    title,
    showTitle = true
}) => {

    return (
        <>
            <Container>
                {showTitle && <Row
                    style={{
                        marginLeft: "0.25rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h1 style={{
                        ...updateEmailFormStyle.title(primaryFontColor),
                        marginBottom: "0"
                    }}>
                        <span className="gradient-text">{` ${title}`}</span>
                    </h1>
                    <div
                        style={{
                            ...updateEmailFormStyle.closeIcon(primaryFontColor),
                            marginRight: "1.5rem",
                            marginLeft: "0"
                        }}
                        className={"float-right"}
                        onClick={() => {
                            setShowReviewsAndRatings(true);
                            setReviewAndRatingShowNav(false);
                            setInputs({
                                briefinfo: "",
                                cancellationreason: "",
                            });
                        }}
                    >
                        X
                    </div>
                </Row>}
                <Row
                    style={{
                        marginLeft: "0.25rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <p style={updateEmailFormStyle.subtitle(primaryFontColor)}>
                        Add your review for this movie here
                    </p>
                </Row>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Ratings
                            value={0}
                            precision={0.5}
                            readOnly={false}
                            handleChange={handleChange}
                            // style={CardStyle.reviewAndRating()}
                            classname="ratings-content-details"
                        />
                        {error && <p
                            style={{
                                color: "red",
                                fontSize: "14px",
                                margin: "0.25rem",
                                textAlign: "left"
                            }}
                        >{'Ratings are mandatory to submit form'}</p>}
                    </Form.Group>
                    <Form.Group controlId="briefinfo">
                        <Form.Label>{""}</Form.Label>
                        <Form.Control
                            name="review"
                            as="textarea"
                            placeholder="(Optional)Review must be atleast 4 characters long"
                            maxLength="200"
                            minLength="4"
                            // ref={register({
                            //     message: "review must be at least of length 4 charecters and max of 200 characters",
                            //     validate: (value) => value.length > 200 || value.length < 4,
                            // })}
                            onChange={(e) =>
                                setInputs({ ...inputs, [e.target.name]: e.target.value })
                            }
                            style={updateEmailFormStyle.input()}
                        />
                        {errors.briefinfo && (
                            <p style={updateEmailFormStyle.errormessage()}>
                                {errors.review.message}
                            </p>
                        )}

                    </Form.Group>
                    <Button style={updateEmailFormStyle.button(primaryBtnColor)} type="submit">
                        {`Submit the review`}
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default function ReviewsAndRating({
    showReviewsAndRatingNav,
    setReviewAndRatingShowNav,
    handleReviewsAndRating,
    contentId,
    reviews,
    children,
    showReviewsAndRatings,
    setShowReviewsAndRatings,
    title
}) {
    const showSuccess = useSelector((state) => pathOr('', ['ReviewsAndRating', 'showSuccess'])(state));
    const [error, setError] = useState(false);
    const { colors } = __parseThemeSelector();
    const [inputs, setInputs] = useState({
        review: "",
        rating: 0,
    });
    const {
        bgColor,
        primaryBtnColor,
        primaryFontColor
    } = colors;
    const dispatch = useDispatch();
    const { handleSubmit, register, errors } = useForm();

    const handleChange = (e, val) => {
        if (val) {
            setError(false);
            setInputs({
                ...inputs,
                rating: val,
            });
        }
    }

    const onSubmit = (values) => {
        let payload = {};
        if (values) {
            setInputs({
                ...inputs,
                review: values.review,
            });
        }
        if (!inputs.rating) {
            setError(true);
        }
        if (inputs.rating) {
            setReviewAndRatingShowNav(false);
            if (inputs.rating && inputs.review) {
                payload = {
                    rating: inputs.rating,
                    review: `${inputs.review}`,
                    contentId
                }
            } else if (inputs.rating) {
                payload = {
                    rating: inputs.rating,
                    contentId
                }
            }
            dispatch(
                userRatingAction.userRating(payload)
            );
            return setInputs({
                review: "",
                rating: 0,
            })
        }
    };


    return (
        <SideNav
            navStyle={GlobalAccountDetailsStyle.navbarstyle(bgColor)}
            showNav={showReviewsAndRatingNav}
            onHideNav={() => {
                setReviewAndRatingShowNav(false);
            }}
            titleStyle={{
                backgroundColor: bgColor,
            }}
            itemStyle={{
                backgroundColor: bgColor,
                padding: "0 2%",
            }}
            openFromRight={true}
            itemHoverStyle={{
                backgroundColor: bgColor,
            }}
            style={{
                overflowY: "scroll",
                minHeight: "100% !important"
            }}
        >
            {reviews.length && showReviewsAndRatings ?
                <ReviewsAndRatingsList
                    handleReviewsAndRating={handleReviewsAndRating}
                    primaryBtnColor={primaryBtnColor}
                    primaryFontColor={primaryFontColor}
                    setShowReviewsAndRatings={setShowReviewsAndRatings}
                    setReviewAndRatingShowNav={setReviewAndRatingShowNav}
                    setInputs={setInputs}
                    inputs={inputs}
                    dispatch={dispatch}
                    reviews={reviews}
                    title={title}
                    contentId={contentId}
                />
                : <ReviewsAndRatingform
                    handleReviewsAndRating={handleReviewsAndRating}
                    showReviewsAndRatingNav={showReviewsAndRatingNav}
                    setReviewAndRatingShowNav={setReviewAndRatingShowNav}
                    setShowReviewsAndRatings={setShowReviewsAndRatings}
                    primaryBtnColor={primaryBtnColor}
                    primaryFontColor={primaryFontColor}
                    contentId={contentId}
                    setInputs={setInputs}
                    inputs={inputs}
                    onSubmit={onSubmit}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    register={register}
                    errors={errors}
                    error={error}
                    title={title}
                />}
        </SideNav>
    );
}
