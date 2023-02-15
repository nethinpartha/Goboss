import React from "react";
import { Card } from "react-bootstrap";
import { titleStyle } from "./titlestyle";
import { useMediaQuery } from "../../../components/Header/viewportHook";
import { __parseThemeSelector } from "../../../selectors/themestyleselector";

export default function Title({ title = "" }) {
  const sm = useMediaQuery("(max-width: 576px)");
  const { colors } = __parseThemeSelector();
  const { bgColor } = colors;
  return (
    <Card style={titleStyle.Card(sm, bgColor)}>
      <div className="account-title-setup">
        <h4 >{title}</h4>{" "}
      </div>
    </Card>
  );
}
