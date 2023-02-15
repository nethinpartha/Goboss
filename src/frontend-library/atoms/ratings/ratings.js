import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";
// import star from '../../icons/star.svg';
// import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

import "./style.scss";

// const StyledRating = withStyles({
//     iconFilled: {
//         color: '#ff6d75',
//     },
//     iconHover: {
//         color: '#ff3d47',
//     },
// })(Rating);

// const customIcons = {
//     1: {
//         icon: <star />,
//         label: 'Satisfactory',
//     },
// }

class Ratings extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  // Error boundary added
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { value, name, precision, readOnly, classname, handleChange } = this.props;

    if (typeof value !== 'number') {
      return null;
    }
    if (this.state.hasError) return <div>Something went wrong.</div>;
    return (
      <div
        className={classname ? classname : "ratings"}
        data-test="ratingsComponent"
      >
        {readOnly ? (
          <Rating
            name={`${name}`}
            defaultValue={value}
            value={value}
            precision={precision}
            readOnly
            data-test="ratings"
          />
        ) : (
          <Rating
            name={`${name}`}
            defaultValue={value}
            // value={value}
            precision={precision}
            data-test="ratings"
            onChange={handleChange}
          />
        )}
      </div>
    );
  }
}

Ratings.propTypes = {
  value: PropTypes.number,
  name: PropTypes.string,
  precision: PropTypes.number,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
};

export default Ratings;
