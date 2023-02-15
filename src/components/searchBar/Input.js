import React, { Component } from "react";
// import searchicon from './assets/search-icon.png';
import search from "./assets/search.svg";
import { withRouter } from "react-router-dom";
require("./style.scss");

class Input extends Component {
  state = {
    query: "",
    // containerWidth: '85%',
    // containerBorderColor: '#fff',
    marginRight: "10px",
    inputFocus: true,
    inputOpacity: 1,
    cursor: "default",
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.closeInputHandler();
      this.props.onCollapseInputHandler();
    }
  };

  openInputHandler = () => {
    this.setState({
      // containerWidth: "85%",
      containerBorderColor: "#fff",
      inputFocus: true,
      inputOpacity: 1,
      cursor: "default",
    });

    this.props.onExpandInputHandler();
  };

  // closeInputHandler = () => this.setState({
  //   containerWidth: '10%',
  //   containerBorderColor: 'transparent',
  //   inputFocus: false,
  //   inputOpacity: 0,
  //   cursor: 'pointer'
  // });

  resetQueryHandler = () => this.setState({ query: "" });

  onChangeHandler = (event) => this.setState({ query: event.target.value });

  onKeyPressHandler = (event) => {
    if (event.key === "Enter" && this.state.query) {
      this.props.onEnterPressed(this.state.query);
      this.props.history.push("/search");
    }
  };

  handleSearchIconClick = () => {
    if (this.state.query) {
      this.props.onEnterPressed(this.state.query);
    }
    this.props.history.push("/search");
  };

  render() {
    return (
      <div className="search-bar-wrapper">
        <div
          style={{
            borderColor: this.state.containerBorderColor,
          }}
          className="search-bar-flex"
          // ref={node => this.wrapperRef = node}
        >
          <input
            type="text"
            placeholder={this.props.placeholder}
            value={this.state.query}
            onKeyPress={this.onKeyPressHandler}
            onChange={this.onChangeHandler}
            className="search-input-bar"
            // ref={input => input && window.requestAnimationFrame(() => input.focus())}
          />
          <div className="search-bar-search-icon-wrapper">
            <img
              src={search}
              // src={this.props.searchIcon ? this.props.searchIcon : searchicon}
              aria-hidden="true"
              onClick={this.handleSearchIconClick}
              style={{ cursor: "pointer" }}
              alt="search content"
              className="search-bar-search-icon"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Input);
