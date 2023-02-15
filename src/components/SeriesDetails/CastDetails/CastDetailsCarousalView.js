import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Contentdetailsselector } from "../../../selectors/contentdetailsselector";
import { __parseThemeSelector } from "../../../selectors/themestyleselector";
import Home from "../../Carousel/Home";
import useWindowSize from "../../../helpers/viewport";
import { pathOr } from "ramda";
import { TrayFilterGlobalStyle } from "../../../styles/layouts/component/styledcomponent/tray-with-filter-style";
import CastDetailScreen from "./CastDetailsScreen";

const CastDetails = () => {
  const [itemId, setItemId] = useState("");
  const [show, setShow] = useState(false);
  const size = useWindowSize();
  let { cast } = Contentdetailsselector();
  const { colors } = __parseThemeSelector();
  const { primaryTxtColor } = colors;
  const handleOnCardClick = ({ id }) => {
    setItemId(id);
    return setShow(!show);
  };

  useEffect(() => {
    if (show) {
      document.querySelector("body").style.overflow = "hidden";
      return;
    }
    document.querySelector("body").style.overflow = "overlay";
  }, [show]);

  return (
    <>
      <TrayFilterGlobalStyle />
      {cast.length > 0 ? (
        <Container fluid>
          <div className="tray-with-filter">
            <div className="carousalWrapper" id="carousal-filter">
              {/* <div
                className="title"
                style={{
                  color: "#fff",
                  marginLeft: "1rem",
                  fontWeight: "bold",
                }}
              >{`Cast & Crew`}</div> */}
              <div className="card-movie-setup">
                <div className="cast-carousel-setup">
                  <Home
                    movies={cast}
                    displayCard={pathOr(768, ["width"])(size) < 546 ? 3 : 8}
                    redirecturl={""}
                    displayTextOnCard={cast.displayTextOnCard}
                    displayHoverState={cast.displayHoverState}
                    smallsize={cast.smallsize}
                    handleOnCardClick={handleOnCardClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      ) : null}
      {itemId && (
        <CastDetailScreen
          show={show}
          setShow={setShow}
          itemId={itemId}
          primaryTxtColor={primaryTxtColor}
        />
      )}
    </>
  );
};

export default CastDetails;
