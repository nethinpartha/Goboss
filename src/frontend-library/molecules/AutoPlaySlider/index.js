import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
// import { LoadingSkeltonTemplate } from '../../atoms/loadingSpinner/loadingskeleton';
import LoadingSpinner from '../../atoms/loadingSpinner';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import image from "./images/reactslider.png";
import imageLogo from "./images/imageLogo.png";
import { SlickSliderStyle } from './autoSliderStyle';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { HeaderGlobalStyle } from '../../../styles/layouts/component/styledcomponent/autoplayerstyle';
require("./style.scss");

function AutoPlaySlider({ setting, display, videoBanner }) {
  if (!display) {
    return null;
  }
  const { contentData } = videoBanner;
  if (!display) {
    return null;
  }
  if (videoBanner && videoBanner.loading) {
    return <LoadingSpinner 
    // height={200} 
    // display={false} 
    />;
  }
  if (contentData && contentData.length <= 0) {
    return null;
  }
  // var bodyStyles = document.body.style;
  // bodyStyles.setProperty('--background-color', '#00bfff');
  // bodyStyles.setProperty('--background-url', "./images/blackgradient.png");
  return (
    <div className="autopaly-container"
      style={{
        background: 'linear-gradient(to right bottom, rgb(0 0 9 / 0%), rgb(5 19 30 / 30%))'
      }}
      data-test="sliderComponent"
    >
      <HeaderGlobalStyle />
      <SlickSliderStyle />
      <Slider {...setting}>
        {contentData.map((content, index) =>
          <>
            <Link to={content.permaLink} key={index}>
              <Container
                fluid
                key={index}
                style={{
                  background: `linear-gradient(to right bottom, rgb(0 0 9 / 0%), rgb(5 19 30 / 30%)),url(${content.imgURL})`,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `center`,
                  backgroundSize: "cover",
                  minHeight: '65vh'
                }}
                className="slider-image-section"
              >
                <Row className="slider-container">
                </Row>
              </Container>
            </Link>
          </>
        )}
      </Slider>
    </div>
  );
}

export default AutoPlaySlider;
