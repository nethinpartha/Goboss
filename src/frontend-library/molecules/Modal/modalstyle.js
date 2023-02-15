import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";
import { __isThemeOfType } from "../../../utils/tenant";
import { __parseThemeSelector } from "../../../selectors/themestyleselector";
import GlobalStyleLayout from "../../../styles/global-styles/globalFonts";
import wallBg from "../../../assets/wall.jpg";
import { pathOr } from "ramda";

export const ModalStyle = () => {
  const currentpagetoshow = useSelector((state) =>
    pathOr(false, ["ShowModal", "currentpagetoshow"])(state)
  );
  const tenantName = process.env.REACT_APP_TENANTNAME;
  console.log(tenantName);
  const isPaymentPage = currentpagetoshow === "paymentpage";
  const bgcolor =
    __isThemeOfType() || isPaymentPage ? "#000000" : `url(${wallBg})`;
  const { colors } = __parseThemeSelector();
  const { primaryBtnColor } = colors;
  return (
    <>
      <GlobalStyleLayout />
      <Global
        styles={
          tenantName === "fitness"
            ? css`
          .authentication-modal .modal-header,
          .authentication-modal .modal-body {
            bottom: 2.5rem;
          }
          .authentication-modal .modal-header,
          .authentication-modal .modal-body {
            border: none;
            margin-top: 1.2rem;
            margin-right: 1rem;
          }

          .authentication-modal {
            .modal-header {
              .close {
                color: ${primaryBtnColor};
                span {
                  color: white;
                  font-size: 1.5rem;
                }
              }
            }
          }

          .authentication-modal .modal-content {
           
            background-color: rgba(0, 0, 0);
            // background-color: ${colors.bgColor};
            position: relative;
            background-size: cover;
            background-position: top;
            // clip-path: polygon(0 0, 100% 0, 100% 92%, 0% 96%);`
            : css`
                .authentication-modal .modal-header,
                .authentication-modal .modal-body {
                  bottom: 2.5rem;
                }
                .authentication-modal .modal-header,
                .authentication-modal .modal-body {
                  border: none;
                  margin-top: 1.2rem;
                  margin-right: 1rem;
                }

                .authentication-modal {
                  .modal-header {
                    .close {
                      color: ${primaryBtnColor};
                      span {
                        color: white;
                        font-size: 1.5rem;
                      }
                    }
                  }
                }

                .authentication-modal .modal-content {
                  background-image: ${__isThemeOfType()
                    ? ""
                    : `linear-gradient(to right bottom, rgba(26, 23, 21, 0.6), rgba(26, 23, 21, 0.7)), ${bgcolor}`};

                  position: relative;
                  background-size: cover;
                  background-position: top;
                  background: ${__isThemeOfType() || isPaymentPage
                    ? "#000000"
                    : ""};
                  // clip-path: polygon(0 0, 100% 0, 100% 92%, 0% 96%);
                }
              `
        }
      />
    </>
  );
};
