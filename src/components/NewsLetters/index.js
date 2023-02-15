import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, ListGroup } from 'react-bootstrap';
import { NewsLetterStyle } from './newsletterstyle';
import { updateUserInfoAction } from '../../actions/updateuser.action';
import { UserInfoSelector } from '../../selectors/getuserinformationselector';
import { __parseThemeSelector } from '../../selectors/themestyleselector';
import { addOrUpdateCard } from "../../styles/layouts/component/styledcomponent/addOrUpdateCard";

export const NewsLetters = () => {
    const [opted, setOpted] = useState(false);
    const dispatch = useDispatch();
    const { isSubscribetoNewsLetter } = UserInfoSelector();
    const { colors } = __parseThemeSelector();
    const { bgColor, primaryBtnColor } = colors;

    const handleCheck = () => {
        let payload = {
            isSubscribetoNewsLetter: !opted
        }
        dispatch(updateUserInfoAction.updateUserInfo(payload))
    }
    useEffect(() => {
        setOpted(isSubscribetoNewsLetter);
    }, [isSubscribetoNewsLetter]);

    return (
        <>
            <NewsLetterStyle />

            <div className="savedcard-setup">
                <h4
                    style={{
                        textAlign: "left",
                        marginTop: "2rem",
                        marginBottom: "2rem",
                        fontFamily: "Inter, sans-serif",
                        color: "#ffffff"
                    }}
                >
                    Subscribe to newsletter
                </h4>
            </div>
            <ListGroup>
                <ListGroup.Item style={{ ...addOrUpdateCard.groupitem(bgColor) }}>
                    <Form>
                        <Form.Group
                            className="checkbox-newsletter"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Label>{""}</Form.Label>
                            <label
                                className="main"
                            >
                                <input
                                    type="checkbox"
                                    onChange={handleCheck}
                                    checked={opted}
                                    className="hover-btn-animation"
                                    style={{ cursor: "pointer" }}
                                />
                                <span
                                    className={opted ? "gradient-text" : "checkbox-text"}
                                >
                                    {`${opted ? "Subscribed" : "Subscribe"} to newsletter`}
                                </span>
                                <span
                                    className="checkboxmark hover-btn-animation"
                                >
                                </span>
                            </label>
                        </Form.Group>
                    </Form>
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}