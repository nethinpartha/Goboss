import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Button,
  Card,
  Container,
  Row,
  Image,
} from "react-bootstrap";
import { HeroBanner } from "../../../../context/hero-banner-context";
import { JubotronStyle, CardStyle } from "./jumbotron-style";
import JumbotronLayout from "./jubotronlayoutstyle";
import VideoPreview from '../../../../frontend-library/molecules/previewVideoPlayer';


function JumbotronCompUnmemo() {
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImg(true);
    }, 2000);
    return () => clearTimeout(timeout);
  })
  return (
    <HeroBanner.Consumer>
      {({
        url,
        isSignedIn,
        handleClick,
        plus,
        play,
        videoBanner,
        addedtolist,
        handleAddToListClick,
        isUserAddedToList,
        addListLoading
      }) => (
        <>
          <JumbotronLayout />
          <Jumbotron
            style={JubotronStyle(videoBanner.thumbnail)}
            fluid
            className={"rounded-0 jumbotronwrapper"}
          >
            {showImg && videoBanner.videoURL && videoBanner.videoURL.includes("mp4") && < VideoPreview
              videoConfigStyle={{
                position: 'absolute',
                left: 0,
                width: '100%',
                height: '100%',
              }}
              dispalaycls={true}
              id="banner-video-player"
              setAutoPlay={true}
              rstCurrTime={false}
              displayposter={videoBanner.thumbnail}
              config={{ url: videoBanner.videoURL }}
            />}
            <Card className="jumbotroncarddetails">
              <Card.Body>
                {videoBanner.title && <Card.Title className="jumbotron-title">{videoBanner.title}</Card.Title>}
                {videoBanner.description && <Card.Subtitle className="mb-2 subtitles">
                  {videoBanner.description}
                </Card.Subtitle>}
                <Container>
                  <Row className="jumbotron-card-wrapper">
                    {videoBanner.playbtn && <Button className="play" onClick={() => handleClick()}>
                      <Row className="row-style">
                        <Image
                          src={`${play}`}
                          alt="play button"
                          className="imageCont"
                        />
                        <span className="btnTxt">{videoBanner.playbtn}</span>
                      </Row>
                    </Button>}
                    {videoBanner.addToListbtn && <Button
                      className="addToList"
                      style={CardStyle.addToList()}
                      onClick={() => handleAddToListClick(videoBanner.videoId)}
                      disabled={addListLoading}
                    >
                      <Row className="row-style-addtolist">
                        <Image
                          src={isUserAddedToList ? addedtolist : plus}
                          alt="shortlist movie"
                          className="addtolistimg"
                        />
                        <span className="addtolisttxt">{isUserAddedToList ? "ADDED TO LIST" : videoBanner.addToListbtn}</span>
                      </Row>
                    </Button>}
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Jumbotron>
        </>
      )}
    </HeroBanner.Consumer>
  );
}

export default React.memo(JumbotronCompUnmemo);