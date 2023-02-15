import React from "react";
import { pathOr } from "ramda";
import { CardContainer, Moviecardsstyle } from "./movie-card-style";
import { Container, Row, Col, Image } from "react-bootstrap";
import Progress from "../../../frontend-library/atoms/linerprogress";
// import { placeholder_url, placeholder_url_small } from "./placeholderimg/index";
import one from "./placeholderimg/1.svg";
import two from "./placeholderimg/2.svg";
import three from "./placeholderimg/3.svg";
import four from "./placeholderimg/4.svg";
import five from "./placeholderimg/5.svg";

const imageUrl = "https://image.tmdb.org/t/p/";
const size = "w500";

export default function MovieCard({
  url = "https://via.placeholder.com/150",
  breakpoint,
  trending,
  history,
  handleOnCardClick,
}) {
  const bp = pathOr("", ["sm"])(breakpoint);
  let duration;
  const firstItem = pathOr("", ["0"])(trending);
  const secondItem = trending ? trending.slice(1, 3) : [];
  const thirdItem = trending ? trending.slice(3, 5) : [];
  let { watchHistory } = firstItem;
  if (watchHistory && watchHistory.duration) {
    duration = watchHistory.duration;
  }
  return (
    <>
      <Moviecardsstyle />
      <Container className={"moviecardwidth nopadding"} fluid>
        <Row className="">
          <Col
            style={{
              ...CardContainer.image(
                (url = `${firstItem.imageUrl}`)
              ),
              ...CardContainer.positionrelative(),
            }}
            sm={12}
            md={6}
            lg={6}
            className="trayfilterleft"
            onClick={() => {
              return history.push(firstItem.permalink);
            }}
          >
            <div className="releasedate">
              <div
                style={{
                  color: "#949CB0",
                  fontSize: `80%`,
                  fontWeight: `300`,
                }}
              >
                {firstItem && firstItem.release_date && firstItem.release_date}
              </div>
              {firstItem &&
                firstItem.title}
            </div>
            <div className="first-img">
              <Image src={one} alt="movies list order" />
            </div>
            {duration && duration > 0 && <Progress value={duration} />}
          </Col>
          <Col sm={12} md={6} lg={6} className="trayfilterright nopadding">
            <Container className="nopadding" fluid>
              <Row className="nopadding">
                {secondItem &&
                  secondItem.map((seconditem, key) => (
                    <Col
                      style={{
                        ...CardContainer.image(
                          `${seconditem.imageUrl}`
                        ),
                        ...{
                          marginTop: `${bp ? "1rem" : ""}`,
                        },
                      }}
                      className="smaller-resize"
                      key={key}
                      onClick={() => {
                        return history.push(seconditem.permalink);
                      }}
                    >
                      <div className="releasedate">
                        <div
                          style={{
                            color: "#949CB0",
                            fontSize: `60%`,
                            fontWeight: `300`,
                          }}
                        >
                          {seconditem &&
                            seconditem.release_date &&
                            seconditem.release_date}
                        </div>
                        {seconditem && seconditem.title}
                      </div>
                      <div style={{ ...CardContainer.bottomright() }}>
                        <Image
                          src={key === 0 ? two : three}
                          alt="movies list order"
                        />
                      </div>
                    </Col>
                  ))}
              </Row>
              <Row>
                {thirdItem &&
                  thirdItem.map((thirdItem, key) => (
                    <Col
                      style={{
                        ...CardContainer.image(
                          (url = `${thirdItem.imageUrl}`)
                        ),
                        ...CardContainer.topmargin(),
                      }}
                      className="smaller-resize"
                      key={key}
                      onClick={() => {
                        return history.push(thirdItem.permalink);
                      }}
                    >
                      <div className="releasedate">
                        <div
                          style={{
                            color: "#949CB0",
                            fontSize: `60%`,
                            fontWeight: `300`,
                          }}
                        >
                          {thirdItem &&
                            thirdItem.title &&
                            thirdItem.title}
                        </div>
                        {thirdItem && thirdItem.title}
                      </div>
                      <div style={{ ...CardContainer.bottomright() }}>
                        <Image
                          src={key === 0 ? four : five}
                          alt="movies list order"
                        />
                      </div>
                    </Col>
                  ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
