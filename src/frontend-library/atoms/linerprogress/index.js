import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import PropTypes from "prop-types";
import { __parseThemeSelector } from '../../../selectors/themestyleselector';


const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 4,
    borderRadius: 0,
  },
  colorPrimary: {
    // backgroundColor: "transparent",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff"
  },
  bar: {
    borderRadius: 0,
    backgroundColor: "rgb(225, 84, 15)",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%"
  },
});

function CustomizedProgressBars({ value, themes, customstyle }) {
  const classes = useStyles();
  const { colors } = __parseThemeSelector();
  const { primaryTxtColor } = colors;
  if (!value) {
    return null;
  }
  const bgColor = themes
    ? {
      backgroundColor: `${themes && themes.colors ? themes.colors.bgColor : ""
        }`,
    }
    : {};
  return (
    <div
      className={classes.root}
      data-test="linearProgressBarComponent"
      style={{ ...bgColor, ...customstyle }}
    >
      <BorderLinearProgress
        variant="determinate"
        value={value}
        aria-label={"Watched"}
      />
    </div >
  );
}

CustomizedProgressBars.prototype = {
  value: PropTypes.number,
};

export default CustomizedProgressBars;
