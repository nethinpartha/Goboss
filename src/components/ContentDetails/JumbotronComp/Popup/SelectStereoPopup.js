import { pathOr } from "ramda";
import React from "react";
import { useSelector } from "react-redux";
import { PopupStyle } from "./popupstyle";
import close from "../../../../assets/icons/close.svg";
import { Image } from "react-bootstrap";
function SelectStereoPopup({
  toggleModal,
  isModalOpen,
  trueVideoValues,
  handleChange,
  radioBtnSelected,
}) {
  let videoSettingSelected = useSelector((state) =>
    pathOr("", ["VideoSettingSelectedReducer"])(state)
  );
  return isModalOpen ? (
    <>
      <PopupStyle />
      <div className="modal__backdrop">
        <div className="modal__container">
          <button className="close-button" onClick={() => toggleModal("close")}>
            <Image src={close} alt={"close popup overlay"} />
          </button>
          <h3 className="modal__title">Select Video Settings</h3>
          <ul className="radio-btn-video-setting">
            {trueVideoValues.map((val, index) =>
              val ? (
                <li key={index}>
                  <label className="label-radio">
                    <input
                      type="radio"
                      name="quality"
                      value={val}
                      onChange={() => handleChange(val)}
                    />
                    <span className="radio-span">{val}</span>
                  </label>
                </li>
              ) : null
            )}
          </ul>
          {!radioBtnSelected && videoSettingSelected.selectedValue === "" ? (
            <span className="radio-span-alert">
              Please select a video setting you prefer.
            </span>
          ) : (
            <></>
          )}

          <div className="btn-group">
            {/* <button className="close-btn" type="button" onClick={toggleModal}>
              close
            </button> */}
            <button
              className="save-btn"
              type="button"
              onClick={() => toggleModal("save")}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default SelectStereoPopup;
