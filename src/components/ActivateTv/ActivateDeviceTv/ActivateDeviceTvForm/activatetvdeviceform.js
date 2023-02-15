import React from "react";
import { pathOr } from "ramda";
import { Container, Button, Row, Form } from "react-bootstrap";
import {
  activatedevicestyle,
  Activatedevicestylenew,
} from "../../../../styles/layouts/component/styledcomponent/activatedeviceformstyle";
import GlobalStyleLayout from "../../../../styles/global-styles/globalStyle";
import { rules } from "../../../../helpers/rules";
import { useDeviceFormHook } from "../../../../hooks/useDeviceFormHook";
import { ButtonLoadingSpinner } from "../../../../frontend-library/atoms/loadingSpinner/buttonloadingspinner";
export default function Activatetvdeviceform() {
  const {
    setError,
    error,
    dispatch,
    errors,
    onSubmit,
    primaryBtnColor,
    colors,
    formField,
    handleSubmit,
    register,
    setFormField,
    primaryTxtColor,
    loading,
  } = useDeviceFormHook();

  const autoTab = e => {
    const BACKSPACE_KEY = 8;
    const DELETE_KEY = 46;
    let tabindex = e.target.getAttribute('tabindex') || 0;
    tabindex = Number(tabindex);
    if (e.keyCode === BACKSPACE_KEY) {
      tabindex -= 1;
    } else if (e.keyCode !== DELETE_KEY) {
      tabindex += 1;
    }
    const elem = document.querySelector(`[tabindex="${tabindex}"]`);
    if (elem) {
      elem.focus();
    }
  };
  return (
    <>
      <GlobalStyleLayout />
      <Activatedevicestylenew />
      <div className="container-panel-setup">
        <div className="container-panel">
          <Container className="container-setup activate-tv">
            <h3 className="title-setup">Activate a Device</h3>
            <p className="subtitle-setup">Enter six digit code here</p>
            <Row>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="formgroup-setup">
                  <Row>
                    <Form.Group className="formInput" controlId="forminput1">
                      <Form.Label>{""}</Form.Label>
                      <Form.Control
                        name="forminput1"
                        autocomplete="off"
                        type="text"
                        placeholder=""
                        style={activatedevicestyle.inputField()}
                        key={1}
                        tabIndex={1}
                        maxLength="1"
                        ref={register({
                          pattern: {
                            value: pathOr(null, ["validation", "number"])(
                              rules
                            ),
                            message: "invalid number",
                          },
                        })}
                        onKeyUp={autoTab}
                        onChange={(e) =>
                          setFormField({
                            ...formField,
                            [e.target.name]: e.target.value,
                          })
                        }
                        disabled={loading}
                        value={formField.forminput1}
                        aria-label={"active device passwrord field"}
                      />
                      {errors.currentpassword && (
                        <p style={activatedevicestyle.errormessage()}>
                          {errors.currentpassword.message}
                        </p>
                      )}
                    </Form.Group>
                    <Form.Group controlId="forminput2" className="formInput">
                      <Form.Label>{""}</Form.Label>
                      <Form.Control
                        name="forminput2"
                        type="text"
                        placeholder=""
                        style={activatedevicestyle.inputField()}
                        maxLength="1"
                        tabIndex={2}
                        key={2}
                        ref={register({
                          pattern: {
                            value: pathOr(null, ["validation", "number"])(
                              rules
                            ),
                            message: "invalid number",
                          },
                        })}
                        disabled={loading}
                        onKeyUp={autoTab}
                        onChange={(e) =>
                          setFormField({
                            ...formField,
                            [e.target.name]: e.target.value,
                          })
                        }
                        value={formField.forminput2}
                      />
                    </Form.Group>
                    <Form.Group className="formInput" controlId="forminput3">
                      <Form.Label>{""}</Form.Label>
                      <Form.Control
                        name="forminput3"
                        type="text"
                        placeholder=""
                        maxLength="1"
                        tabIndex={3}
                        key={3}
                        style={activatedevicestyle.inputField()}
                        ref={register({
                          pattern: {
                            value: pathOr(null, ["validation", "number"])(
                              rules
                            ),
                            message: "invalid number",
                          },
                        })}
                        onKeyUp={autoTab}
                        onChange={(e) =>
                          setFormField({
                            ...formField,
                            [e.target.name]: e.target.value,
                          })
                        }
                        disabled={loading}
                        value={formField.forminput3}
                      />
                    </Form.Group>
                    <Form.Group className="formInput" controlId="forminput4">
                      <Form.Label>{""}</Form.Label>
                      <Form.Control
                        name="forminput4"
                        type="text"
                        placeholder=""
                        maxLength="1"
                        tabIndex={4}
                        key={4}
                        style={activatedevicestyle.inputField()}
                        ref={register({
                          pattern: {
                            value: pathOr(null, ["validation", "number"])(
                              rules
                            ),
                            message: "invalid number",
                          },
                        })}
                        disabled={loading}
                        onKeyUp={autoTab}
                        onChange={(e) =>
                          setFormField({
                            ...formField,
                            [e.target.name]: e.target.value,
                          })
                        }
                        value={formField.forminput4}
                      />
                    </Form.Group>
                    <Form.Group className="formInput" controlId="forminput5">
                      <Form.Label>{""}</Form.Label>
                      <Form.Control
                        type="text"
                        name="forminput5"
                        placeholder=""
                        maxLength="1"
                        style={activatedevicestyle.inputField()}
                        ref={register({
                          pattern: {
                            value: pathOr(null, ["validation", "number"])(
                              rules
                            ),
                            message: "invalid phone number",
                          },
                        })}
                        tabIndex={5}
                        key={5}
                        disabled={loading}
                        onKeyUp={autoTab}
                        onChange={(e) =>
                          setFormField({
                            ...formField,
                            [e.target.name]: e.target.value,
                          })
                        }
                        value={formField.forminput5}
                      />
                    </Form.Group>
                    <Form.Group className="formInput" controlId="forminput6">
                      <Form.Label>{""}</Form.Label>
                      <Form.Control
                        name="forminput6"
                        type="text"
                        placeholder=""
                        style={activatedevicestyle.inputField()}
                        maxLength="1"
                        tabIndex={6}
                        key={6}
                        ref={register({
                          pattern: {
                            value: pathOr(null, ["validation", "number"])(
                              rules
                            ),
                            message: "invalid phone number",
                          },
                        })}
                        disabled={loading}
                        onKeyUp={autoTab}
                        onChange={(e) =>
                          setFormField({
                            ...formField,
                            [e.target.name]: e.target.value,
                          })
                        }
                        value={formField.forminput6}
                      />
                    </Form.Group>
                  </Row>
                </div>
                {error && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14px",
                    }}
                  >
                    {error}
                  </p>
                )}
                <div className="activate-btn">
                  <Button
                    style={{
                      background: primaryBtnColor,
                      border: "none",
                      outline: "none",
                    }}
                    disabled={loading}
                    className="Button-new hover-btn-animation"
                    type="submit"
                  >
                    {loading ? <ButtonLoadingSpinner /> : "Activate Device"}
                  </Button>
                </div>
              </Form>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
