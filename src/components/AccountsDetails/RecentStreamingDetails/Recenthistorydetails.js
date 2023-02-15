import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import {
  recentstreamingstyle,
  RecentStreamingGlobalStyle,
} from "./recentstreamingdetailsstyle";
import { __parseThemeSelector } from '../../../selectors/themestyleselector';

export default function Recenthistorydetails() {
  const { colors } = __parseThemeSelector();
  const { bgColor, primaryFontColor } = colors;
  return (
    <>
      <RecentStreamingGlobalStyle />
      <ListGroup >
        <ListGroup.Item style={recentstreamingstyle.container(bgColor)}>
          <h4 style={recentstreamingstyle.title()}>
            Recent device streaming activity
          </h4>
          <p style={recentstreamingstyle.subtitle()}>
            The most recently used devices and locations on your account.
          </p>
        </ListGroup.Item>
        <ListGroup.Item style={recentstreamingstyle.container(bgColor)}>
          <h4 style={recentstreamingstyle.devicetitle()}>
            Chrome PC (Cadmium)
          </h4>
          <p style={recentstreamingstyle.subtitle()}>
            <p style={recentstreamingstyle.devicesubtitle()}>
              Tamil Nadu (IN) - 210.18.182.103
            </p>
            <p style={recentstreamingstyle.devicesubtitle()}>
              Last Used: 15/02/21, 6:54:28 AM GMT
            </p>
          </p>
        </ListGroup.Item>
        <ListGroup.Item style={recentstreamingstyle.container(bgColor)}>
          <h4 style={recentstreamingstyle.devicetitle()}>
            DefaultWidevineAndroidPhone
          </h4>
          <p style={recentstreamingstyle.subtitle()}>
            <p style={recentstreamingstyle.devicesubtitle()}>
              {" "}
              Tamil Nadu (IN) - 2409:4072:214:3603:bbea:be46:3846:c08d
            </p>
            <p style={recentstreamingstyle.devicesubtitle()}>
              Last Used: 14/02/21, 4:48:49 PM GMT{" "}
            </p>
            <p style={recentstreamingstyle.devicesubtitle()}>
              Tamil Nadu (IN) - 2409:4072:214:3603:4ecb:6cfc:a31f:5fe2{" "}
            </p>
            <p style={recentstreamingstyle.devicesubtitle()}>
              Last Used: 14/02/21, 12:23:04 PM GMT Tamil Nadu (IN) -
              49.207.129.170
            </p>
            <p style={recentstreamingstyle.devicesubtitle()}>
              12:23:04 PM GMT Tamil Nadu (IN) - 49.207.129.170
            </p>
            <p style={recentstreamingstyle.devicesubtitle()}>
              Last Used: 02/02/21, 10:01:50 PM GMT
            </p>
          </p>
        </ListGroup.Item>
        <ListGroup.Item style={recentstreamingstyle.container(bgColor)}>
          <h4 style={recentstreamingstyle.devicetitle()}>
            DefaultWidevineAndroidPhone
          </h4>
          <p style={recentstreamingstyle.subtitle()}>
            <p style={recentstreamingstyle.devicesubtitle()}>
              Tamil Nadu (IN) - 2409:4072:6007:4bac:8f57:ec93:9a36:876b
            </p>
            <p style={recentstreamingstyle.devicesubtitle()}>
              Last Used: 03/02/21, 11:12:36 AM GMT
            </p>
            <p style={recentstreamingstyle.devicesubtitle()}>
              Tamil Nadu (IN) - 2409:4072:6d06:6da8:a8a:eafb:5f0e:ead3
            </p>
            <p style={recentstreamingstyle.devicesubtitle()}>
              {" "}
              Last Used: 27/01/21, 4:27:26 PM GMT
            </p>
          </p>
        </ListGroup.Item>
        <ListGroup.Item style={{ ...recentstreamingstyle.container(bgColor), textAlign: 'center' }}>
          <Button variant="primary" style={recentstreamingstyle.button()}>
            Close
        </Button>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
