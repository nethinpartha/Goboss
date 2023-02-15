import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import SideNav from "react-simple-sidenav";
import Filter from "../Filters";
import filter from "../../assets/filter.svg";

export const FilterSidenavBar = ({ keyword, prevSearchKeyword }) => {
  const [showNav, setShowNav] = useState();
  return (
    <>
      <div
        className="filterbtnwrapper filter-btn"
        onClick={() => setShowNav(true)}
        style={{
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Image
          src={filter}
          thumbnail
          alt={"Thumbnail"}
          className="filter-button-conf-image"
        />
        <span
          style={{
            // fontSize: `26px`,
            letterSpacing: `0.3px`,
            // paddingLeft: "4%",
            // paddingRight: "0",
            color: `#FFFFFF`,
          }}
          className="filter-button-conf-text"
        >
          {"Filter"}
        </span>
      </div>
      <div>
        <SideNav
          navStyle={{
            minWidth: "50%",
            minHeight: "100%",
            height: "auto",
            backgroundColor: "#131722",
            padding: "0 2%",
          }}
          showNav={showNav}
          onHideNav={() => setShowNav(false)}
          titleStyle={{ backgroundColor: "#4CAF50" }}
          itemStyle={{ backgroundColor: "#131722", padding: "0 2%" }}
          openFromRight={true}
          itemHoverStyle={{ backgroundColor: "#CDDC39" }}
        >
          <Filter
            setShowNav={setShowNav}
            keyword={keyword}
            prevSearchKeyword={prevSearchKeyword}
          />
        </SideNav>
      </div>
    </>
  );
};
