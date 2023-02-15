import React from 'react';
import { Global, css } from "@emotion/react";

export const NewsLetterStyle = () => {
    return (
        <>
            <Global
                styles={css`
                
             .checkbox-newsletter label {
                 margin-left: 0.75rem;
             }
             /* Hide the default checkbox */
             input[type=checkbox] {
                 visibility: hidden;
             }
               
             /* Creating a custom checkbox
             based on demand */
             .checkboxmark {
                 position: absolute;
                 left: 10px;
                 height: 25px;
                 width: 25px;
                 border: 1px solid #ffffff;
                 border-radius: 2px;
                 background-color: white;
                 cursor: pointer;
             }
             .checkbox-text {
                 color: #ffffff;
             }
               
             /* Specify the background color to be
             shown when hovering over checkbox */
             .main:hover input ~ .checkboxmark {
                 background-color: white;
             }
               
             /* Specify the background color to be
             shown when checkbox is checked */
             .main input:checked ~ .checkboxmark {
                background-color: #e1540f;
             }
               
             /* Checkmark to be shown in checkbox */
             /* It is not be shown when not checked */
             .checkboxmark:after {
                 content: "";
                 position: absolute;
                 display: none;
             }
               
             /* Display checkmark when checked */
             .main input:checked ~ .checkboxmark:after {
                 display: block;
             }
               
             /* Styling the checkmark using webkit */
             /* Rotated the rectangle by 45 degree and 
             showing only two border to make it look
             like a tickmark */
             .main .checkboxmark:after {
                 left: 8px;
                 bottom: 5px;
                 width: 6px;
                 height: 12px;
                 border: solid white;
                 border-width: 0 4px 4px 0;
                 -webkit-transform: rotate(45deg);
                 -ms-transform: rotate(45deg);
                 transform: rotate(45deg);
             }
                `}
            />
        </>
    )
}