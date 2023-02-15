import React, { useEffect } from "react";
import pathOr from "ramda/src/pathOr";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
// import { LoadingSkeltonTemplate } from "../../frontend-library/atoms/loadingSpinner/loadingskeleton";
import LoadingSpinner from '../../frontend-library/atoms/loadingSpinner';
import Title from "./MyListFragments/Title/title";
import deleteicon from "../../assets/images/delete.svg";
import { ListMovieGlobalStyle } from "./listmoviesstyle";
import { MyListLayout } from "./ListMoviesLayout";
import { AlertModal } from "../../frontend-library/atoms/alertmodal";
import { useMyListSelector } from '../../selectors/useMyListselector';
import Progress from "../../frontend-library/atoms/linerprogress";
import CalculateProgress from '../../helpers/progressbar';

const MyListList = ({ title }) => {
  const history = useHistory();
  const {
    loading,
    results,
    handleclearall,
    handleAcceptanceMylist,
    handleDeleteWatchList,
    watchlist,
    primaryTxtColor
  } = useMyListSelector();
  let duration;
  return loading ? (
    <LoadingSpinner />
  ) : (
    <>
      <ListMovieGlobalStyle />
      <MyListLayout />
      <div className="movie-list-container">
        <Row>
          <Title
            primaryTxtColor={primaryTxtColor}
            title={title}
            handleclearall={handleclearall}
            resultsLength={results.length}
          />
        </Row>
        {results && results.length > 0 ? (
          results.map((result, index) => {
            duration = 0;
            if (result.runtime && result.watchHistoryDuration) {
              duration = CalculateProgress(result.watchHistoryDuration, result.runtime);
            }
            return (
              <>
                <Container key={index}>
                  <Row className={"mylist-fade-in"} key={result.id}>
                    <Col
                      xs={2}
                      md={2}
                      lg={1}
                      style={{
                        backgroundImage: `url(${pathOr("", ["gallery", "1x1"])(
                          result
                        )})`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        // backgroundPosition: "50% 50%",
                        backgroundColor: "#131722",
                        border: "0",
                        cursor: "pointer"
                      }}
                      onClick={() => history.push(`${result.permaLink}`)}
                    ></Col>
                    <Col className="paragraph-content-setup">
                      <p
                        style={{
                          color: "#FFFFFF",
                          textAlign: "left",
                          paddingLeft: "19px",
                        }}
                        className="paragraph-content-title"
                      >
                        {result.title}
                      </p>
                      <p
                        style={{
                          color: "#A9ACB4",
                          textAlign: "left",
                          marginTop: "9px",
                          marginBottom: "-3px",
                          paddingLeft: "19px",
                        }}
                        className="paragraph-content-year"
                      >
                        {result.yearOfRelease}{" "}
                        {result.genres.length > 0
                          ? result.genres.map((item) => (
                            <span key={item.title}>, {item.title} </span>
                          ))
                          : null}
                      </p>
                      <p style={{marginTop:"0.8rem"}}>
                        {result.duration && duration > 0 && <Progress value={duration} />}
                      </p>
                    </Col>
                    <Col
                      xs={2}
                      md={2}
                      lg={1}
                      className="delete-icon-setup"
                      onClick={() => handleDeleteWatchList(result.id)}
                    >
                      <img
                        src={deleteicon}
                        alt="delete"
                        className="delete-icon hover-btn-animation"
                      />
                    </Col>
                  </Row>
                </Container>
              </>
            )
          }
          )
        ) : (
          <p
            style={{
              justifyContent: "center",
              fontSize: "26px",
              color: "#ffffff",
            }}
          >
            Nothing yet added to the watch List!
          </p>
        )}

        <AlertModal handleAcceptance={handleAcceptanceMylist} />
      </div>
    </>
  );
};

export default React.memo(MyListList);
