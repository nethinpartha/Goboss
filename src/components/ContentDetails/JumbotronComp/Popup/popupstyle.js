import React from "react";
import { Global, css } from "@emotion/react";
import { __parseThemeSelector } from "../../../../selectors/themestyleselector";

export const PopupStyle = () => {
  const { colors } = __parseThemeSelector();
  const { primaryBtnColor, bgColor, primaryFontColor } = colors;
  return (
    <>
      <Global
        styles={css`
          .modal__backdrop {
            background: rgba(0, 0, 0, 0.65);
            bottom: 0;
            left: 0;
            overflow: auto;
            position: fixed;
            right: 0;
            top: 0;
            z-index: 10;
          }

          .radio-btn-video-setting > li {
            list-style-type: none;
          }
          .close-button {
            position: absolute;
            top: 6px;
            right: 6px;
            font-size: 12px;
            font-weight: bold;
            cursor: pointer;
            border: none;
            width: 15%;
            object-fit: contain;
            background: transparent;
          }

          .modal__container {
            background: #fff;
            border-radius: 5px;
            max-width: 100%;
            margin: 50px auto;
            padding: 15px;
            width: 260px;
            background: ${bgColor};
            color: ${primaryFontColor};
            animation: fadeIn 0.5s ease-in;
            position: relative;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .modal__title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 25px;
          }
          .btn-group {
            display: flex;
            gap: 10px;
          }
          input[type="radio"]:after {
            width: 15px;
            height: 15px;
            border-radius: 15px;
            top: 2px;
            left: -2.5px;
            position: relative;
            background-color: #d1d3d1;
            content: "";
            display: inline-block;
            visibility: visible;
            border: 2px solid white;
          }
          input[type="radio"]:checked:after {
            width: 15px;
            height: 15px;
            border-radius: 15px;
            top: 2px;
            left: -2.5px;
            position: relative;
            background-color: ${primaryBtnColor};
            content: "";
            display: inline-block;
            visibility: visible;
            border: 2px solid white;
          }
          .radio-span {
            padding-left: 10px;
          }
          .radio-span-alert {
            color: red;
            font-size: 10px;
          }
          .save-btn {
            background: ${primaryBtnColor};
            border: 0;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            padding: 10px 15px;
            width: 100%;
            transition: transform 100ms ease-out;

            &:hover {
              transform: scale(1.02);
            }
          }
          .save-btn {
            background: ${primaryBtnColor};
            border: 0;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            padding: 10px 15px;
            width: 100%;
            transition: transform 100ms ease-out;

            &:hover {
              transform: scale(1.02);
            }
          }
        `}
      />
    </>
  );
};
