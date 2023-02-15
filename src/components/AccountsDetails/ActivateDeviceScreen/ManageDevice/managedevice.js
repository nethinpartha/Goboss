import React from "react";
import { Table, Image, Button } from "react-bootstrap";
import { managedevicesstlye } from "../../../../styles/layouts/component/styledcomponent/managedevicestyle";
// import deleteicon from "./icons/delete.svg";
import deleteicon from "../../../../assets/images/delete.svg";
import "../../../../styles/layouts/component/scss/managedevicestyle.scss";
import { AlertModal } from "../../../../frontend-library/atoms/alertmodal";
import LoadingSpinner from "../../../../frontend-library/atoms/loadingSpinner";
import { useManageDevice } from "../../../../hooks/useManageDevice";
import { clearIndiviDevicesAction } from "../../../../actions/clearindivactivedevice.action";
import Moment from "react-moment";
export default function Managedevice() {
  const {
    loggedInDevices,
    colors,
    primaryBtnColor,
    primaryTxtColor,
    dispatch,
    handleClearAll,
    handleAcceptanceManageDevice,
    loading
  } = useManageDevice();
  if (loggedInDevices && loggedInDevices.length <= 0) {
    return null;
  }
  const handleIndivDeactivation = (deviceId) => {
    return dispatch(
      clearIndiviDevicesAction.clearIndividualDevices({ deviceId })
    );
  };
  return loading ? <LoadingSpinner /> : (
    <>
      <h4 style={managedevicesstlye.heading()} className="heading">
        <div
          style={{
            textAlign: "left",
            width: "70%",
            fontFamily: "Inter, sans-serif",
            fontSize: "26px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Manage your devices
        </div>
        <div
          className="update-btn-setup"
          style={{
            textAlign: "right",
            width: "46%",
            fontFamily: "Inter, sans-serif",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            // onClick={() => setShowCard(false)}
            variant="link"
            style={{
              border: "none",
              fontFamily: "Inter,sans-serif",
              textAlign: "right",
              textTransform: "capitalize",
              textDecoration: "none"
            }}
            onClick={handleClearAll}
          >
            <div className="update-btn"><span className="gradient-text">Clear All</span></div>
          </Button>
        </div>
      </h4>
      <Table hover responsive className="table-setup">
        <thead style={{ borderTop: "0" }}>
          <tr>
            <th
              className="th"
              style={managedevicesstlye.th()}>
              <span className="gradient-text">Device ID</span>
            </th>
            <th style={managedevicesstlye.th()}
              className="th">
              <span className="gradient-text">Device Name</span>
            </th>
            <th style={managedevicesstlye.th()} className="th">
              <span className="gradient-text"> Registered date</span>
            </th>
            <th
              style={{ ...managedevicesstlye.th() }}
              className="th"
            >
              {''}
            </th>
          </tr>
        </thead>
        <tbody>
          {loggedInDevices.map((devices, index) => {
            return (
              <tr style={managedevicesstlye.wrapper()} key={index}>
                <td style={managedevicesstlye.td()} className="td" id={devices.deviceId}>
                  {devices.deviceId}
                </td>
                <td style={managedevicesstlye.td()} className="td" id={devices.deviceName}>
                  {devices.deviceName}
                </td>
                <td style={managedevicesstlye.td()} className="td" id={devices.updatedDate}>
                  <Moment format="YYYY-MM-DD HH:mm" withTitle>
                    {devices.updatedDate}
                  </Moment>
                </td>
                <th
                  style={{
                    ...managedevicesstlye.th(),
                    textAlign: "center",
                    margin: "1rem",
                  }}
                  className="th"
                >
                  <Image
                    src={`${deleteicon}`}
                    className="hover-btn-animation"
                    alt="delete device"
                    style={{
                      height: "25px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleIndivDeactivation(devices.deviceId)}
                  />
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AlertModal handleAcceptance={handleAcceptanceManageDevice} />
    </>
  );
}
