import React from "react";
import Filter from "./Filter/filter";
import Title from "./Title/title";
import CardSection from "./CardSection/cardsection";
import { Row, Col } from "react-bootstrap";
import { TrayFilterGlobalStyle } from "../../styles/layouts/component/styledcomponent/tray-with-filter-style";

export default function TrayWithFilter({
  title = "New Movies",
  trending = [],
  filtertype,
  handleFilterClick,
  handleOnCardClick,
  primaryTxtColor
}) {
  return (
    <>
      <TrayFilterGlobalStyle />
      <div className="tray-with-filter">
        <div className="carousalWrapper">
          <Row>
            <Col sm={12} md={6}>
              <Title title={title} />
            </Col>
            <Col sm={12} md={6}>
              <Filter
                filtertype={filtertype}
                handleFilterClick={handleFilterClick}
              />
            </Col>
          </Row>
        </div>
      </div>
      <>
        <div className="tray-with-filter">
          <div className="carousalWrapper" id="carousal-filter">
            <CardSection
              trending={trending}
              redirecturl={"/movies"}
              handleOnCardClick={handleOnCardClick}
            />
          </div>
        </div>
      </>
    </>
  );
}
