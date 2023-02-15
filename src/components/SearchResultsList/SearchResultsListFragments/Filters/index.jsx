import React, { useEffect, useState } from "react";
import { pathOr } from "ramda";
import { useDispatch, useSelector } from "react-redux";
import leftarrow from "../../assets/left-arrow.svg";
// import Collapsible from 'react-collapsible';
import AccordionComponent from "./AccordionComponent.jsx";
import { Button, Row, Col, Image } from "react-bootstrap";
import { getfilterparamseviceAction } from "../../../../actions/getfilterparams.action";
import { searchfiltercontentAction } from "../../../../actions/searchfiltercontent.action";
import { getfiltercountAction } from "../../../../actions/getfiltercount.action";
import { Filterparmsselector } from "../../../../selectors/filterparamsselector";
import { __parseThemeSelector } from "../../../../selectors/themestyleselector";
import { clean } from "../../../../helpers/cleanObj";

import "./style.scss";

export default function Filter({ setShowNav, keyword, prevSearchKeyword }) {
  const dispatch = useDispatch();
  const category = [
    "Drama",
    "Love",
    "Romance",
    "horror",
    "Sci-fi",
    "Action",
    "Anime",
  ];
  const filterType = ["Category", "Cast Crew", "Language", "Year"];
  const { filterparams } = Filterparmsselector();
  //   const counts = useSelector((state) => state);
  //   console.log("ounts", counts);
  const count = useSelector((state) =>
    pathOr(0, ["Searchfiltercount", "result", "count"])(state)
  );

  const [initialParams, setInitialParams] = useState({});
  const [selectedTypes, setSelectedTypes] = useState({});
  const { colors } = __parseThemeSelector();
  const { primaryBtnColor, primaryFontColor } = colors;

  const handleFilterSelection = ({ type = "", id }) => {
    if (selectedTypes[type]) {
      let arr = [...selectedTypes[type], id];
      let flattenVal = [...new Set(arr)];
      setSelectedTypes({
        ...selectedTypes,
        [type]: [...flattenVal],
      });
    }
  };

  const handleApplyFilter = () => {
    let typesFilter = { ...selectedTypes };
    let cleanTypesFilter = clean(typesFilter);
    return dispatch(
      searchfiltercontentAction.SearchFilterContent({
        filterType: cleanTypesFilter,
        keyword,
      })
    );
  };

  const handleClearAllFilter = () => {
    setSelectedTypes({ ...initialParams });
    // after resetting filter, make a API call to get the previous result before clear filter
    dispatch({ type: "RESET_FILTER_COUNT" });
    setShowNav(false);
    if (prevSearchKeyword) {
      return dispatch(
        searchfiltercontentAction.SearchFilterContent({
          keyword: prevSearchKeyword,
        })
      );
    }
  };

  useEffect(() => {
    if (
      (selectedTypes && selectedTypes?.genres?.length > 0) ||
      selectedTypes?.language?.length > 0
    ) {
      let typesCount = { ...selectedTypes };
      let cleanTypesCount = clean(typesCount);
      return dispatch(
        getfiltercountAction.getfiltercount({
          filterType: cleanTypesCount,
          keyword,
        })
      );
    }
  }, [selectedTypes, keyword, dispatch]);

  useEffect(() => {
    if (filterparams && filterparams.length > 0) {
      let allParams = {};
      filterparams.forEach((params, index) => {
        let type = params.name;
        allParams = { ...allParams, [type]: [] };
      });
      setInitialParams(allParams);
      setSelectedTypes(allParams);
    }

    if (!filterparams) {
      return dispatch(getfilterparamseviceAction.getfilterparam());
    }
  }, [dispatch, filterparams]);

  return (
    <>
      <div className="filter-title mb-2">
        <Row className={"p-3"}>
          <Col
            style={{
              marginTop: "1%",
              paddingLeft: "0",
              marginLeft: "0",
            }}
            onClick={() => setShowNav(false)}
          >
            <Image
              src={leftarrow}
              alt={"close filter"}
              style={{
                cursor: "pointer",
              }}
            />
          </Col>
          <Col
            style={{
              color: "white",
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            {"Filter"}
          </Col>
          <Col
            style={{
              color: "#A3A4A5",
              fontSize: "15px",
              marginTop: "2%",
            }}
          >
            <div
              className={"float-right gradient-text"}
              style={{ fontWeight: "bold", cursor: "pointer" }}
              onClick={() => handleClearAllFilter()}
            >
              {"Clear All Filters"}
            </div>
          </Col>
        </Row>
      </div>
      <section className={"filter-wrapper"}>
        <AccordionComponent
          items={category}
          filterType={filterType}
          filterparams={filterparams}
          handleFilterSelection={handleFilterSelection}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          keyword={keyword}
          prevSearchKeyword={prevSearchKeyword}
        />
      </section>
      <footer className={"bg-light text-center text-lg-start"}>
        <div
          className={"Container text-left p-3 fixed-bottom"}
          style={{
            backgroundColor: "#363A43",
            color: "#E6E6E6",
            position: "absolute",
          }}
        >
          <Row className="">
            {count > 0 && (
              <Col>
                <h5
                  className="gradient-text"
                  style={{
                    paddingTop: "0.5rem",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  {count} Movies Found
                </h5>
              </Col>
            )}
            <Col style={{ textAlign: "right" }}>
              <Button
                variant="light"
                onClick={() => {
                  handleApplyFilter();
                  setShowNav(false);
                }}
                style={{
                  background: primaryBtnColor,
                  border: "none",
                  outline: "none",
                  color: primaryFontColor,
                  textTransform: "uppercase",
                }}
              >
                Apply
              </Button>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
}
