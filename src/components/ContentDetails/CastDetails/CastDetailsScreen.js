import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SideNav from "react-simple-sidenav";
import "./style.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import { castDetailsAction } from "../../../actions/castdetails.action";
import { CastDetailsSelector } from "../../../selectors/castdetailsselector";
import { castdetailssidenav } from "../../../styles/layouts/component/styledcomponent/castdetailssidenavstyle";
// import { CastDetailsLoadingSpinner } from "../../../frontend-library/atoms/loadingSpinner/loadingskeleton";
import LoadingSpinner from '../../../frontend-library/atoms/loadingSpinner';

const CastDetailScreen = ({
  show,
  setShow,
  itemId,
  primaryTxtColor
}) => {
  let {
    profilePic,
    isActive,
    firstName,
    role,
    lastName,
    description,
    gallery,
    loading,
  } = CastDetailsSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(castDetailsAction.castDetails(itemId));
  }, [itemId]);

  return (
    <>
      <div className="cast-details-sidebar">
        <SideNav
          navStyle={castdetailssidenav.sidenavbar()}
          showNav={show}
          onHideNav={() => setShow(false)}
          itemStyle={castdetailssidenav.sidenavitem()}
          openFromRight={true}
          itemHoverStyle={castdetailssidenav.sidenavhover()}
          style={{ overflowY: "scroll", height: "113vh" }}
        >
          <Container style={castdetailssidenav.container()}>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                <Row
                  style={castdetailssidenav.closeiconrow()}
                  onClick={() => setShow(false)}
                >
                  <Col xs={8} sm={6} md={8}><span className="gradient-text">{`${firstName} ${lastName}`}</span></Col>
                  <Col style={castdetailssidenav.closeicon()} xs={4} sm={6} md={4}>X</Col>
                </Row>
                <Row style={castdetailssidenav.resetPadding()}>
                  <Col>
                    <Image
                      src={profilePic}
                      style={castdetailssidenav.profileImgWidth()}
                    />
                  </Col>
                </Row>
                <Row style={castdetailssidenav.descriptionTitle()}>
                  {`${firstName} ${lastName} is also Known for:`}
                </Row>
                <Row style={castdetailssidenav.description()}>
                  {description}
                </Row>
              </>
            )}
          </Container>
        </SideNav>
      </div>
    </>
  );
};

export default CastDetailScreen;
