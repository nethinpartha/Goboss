import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Accordion, Card, Container, Row, Col } from "react-bootstrap";
import {
  accordionStyle,
  cardBody,
  Items,
  FilterAccordionGlobalStyle,
} from "./accrodionstyle";
import { __parseThemeSelector } from "../../../../selectors/themestyleselector";
import { searchfiltercontentAction } from "../../../../actions/searchfiltercontent.action";
import { getfiltercountAction } from "../../../../actions/getfiltercount.action";
import pathOr from "ramda/src/pathOr";
import { clean } from "../../../../helpers/cleanObj";

// static assets
import downarrow from "../assets/down-arrow.svg";

const FilterTypes = ({
  params,
  setSelectedTypes,
  selectedTypes,
  keyword,
  dispatch,
}) => {
  const prevSearchKeyword = useSelector((state) =>
    pathOr("", ["searchcontent", "keyword"])(state)
  );
  const handleIndividualFilterClear = (e, type) => {
    e.stopPropagation();
    setSelectedTypes({
      ...selectedTypes,
      [type]: [],
    });
    dispatch(
      getfiltercountAction.getfiltercount({
        keyword: prevSearchKeyword,
        [type]: [],
        clearType: true,
      })
    );

    if (prevSearchKeyword) {
      let types = {
        ...selectedTypes,
        [type]: [],
      };
      let cleanTypes = clean(types);
      dispatch(
        searchfiltercontentAction.SearchFilterContent({
          filterType: cleanTypes,
          keyword: prevSearchKeyword,
        })
      );
    }
  };

  return (
    <>
      <Card.Header style={accordionStyle()} className={"filter-header-wrapper"}>
        <Accordion.Toggle
          as={Button}
          style={{ background: "#363A43" }}
          variant="link"
          eventKey="0"
        >
          <Row>
            <Col>{params.title}</Col>
            <Col
              style={{
                textAlign: "right",
              }}
            >
              <span
                onClick={(e) => handleIndividualFilterClear(e, params.name)}
                className="clear-filter-type"
              >
                {"clear"}
              </span>
              <img
                src={downarrow}
                alt="chevron"
                style={{
                  height: "13px",
                  width: "25px",
                }}
              />
            </Col>
          </Row>
        </Accordion.Toggle>
      </Card.Header>
    </>
  );
};

const FilterOptions = ({
  bgColor,
  params,
  doSearch,
  handleFilterSelection,
  selectedTypes,
  keyword,
}) => {
  const handleFilterSelectionClick = (item) => {
    doSearch(item.title);
    handleFilterSelection({ type: params.name, id: item.id });
  };
  return (
    <>
      <Accordion.Collapse eventKey="0">
        <Card.Body style={cardBody(bgColor)}>
          <Container>
            <Row style={{ background: bgColor, padding: "0.5rem 0" }}>
              {params &&
                params.values.length > 0 &&
                params.values.map((item, key) => (
                  <Col
                    key={key}
                    style={Items()}
                    lg={2}
                    onClick={() => handleFilterSelectionClick(item)}
                    className={
                      selectedTypes &&
                      selectedTypes[params.name]?.indexOf(item.id) === -1
                        ? "filter-btn-type"
                        : "filter-btn-type-selected"
                    }
                  >
                    {item.title}
                  </Col>
                ))}
            </Row>
          </Container>
        </Card.Body>
      </Accordion.Collapse>
    </>
  );
};

function AccordionComponent({
  filterparams,
  handleFilterSelection,
  selectedTypes,
  setSelectedTypes,
  keyword,
  prevSearchKeyword,
}) {
  const dispatch = useDispatch();
  const doSearch = (query) => {
    // dispatch(searchActions.SearchReq(query));
  };
  const { colors } = __parseThemeSelector();
  const { bgColor } = colors;
  return (
    <>
      <FilterAccordionGlobalStyle />
      {filterparams &&
        filterparams.length > 0 &&
        filterparams.map((params, index) => (
          <Accordion
            defaultActiveKey={index === 0 ? "0" : "1"}
            key={index}
            style={{ marginBottom: "2%" }}
            className={"filterclass"}
          >
            <Card>
              <FilterTypes
                params={params}
                setSelectedTypes={setSelectedTypes}
                selectedTypes={selectedTypes}
                keyword={keyword}
                prevSearchKeyword={prevSearchKeyword}
                dispatch={dispatch}
              />
              <FilterOptions
                bgColor={bgColor}
                params={params}
                doSearch={doSearch}
                handleFilterSelection={handleFilterSelection}
                selectedTypes={selectedTypes}
                keyword={keyword}
              />
            </Card>
          </Accordion>
        ))}
    </>
  );
}
export default AccordionComponent;
