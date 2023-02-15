import React from "react";
import TitleBar from "./TitleBar";
class ControlBar extends React.Component {
  constructor(props) {
    super(props);
    // this.exitPlayer = this.exitPlayer.bind(this);
  }

  componentDidMount() {
    const { playerData } = this.props;
    const player_ = playerData;
  }

  exitPlayer = () => {
    return window.history.back();
  };

  render() {
    const { player } = this.props;
    return (
      <>
        <TitleBar player={player} exitPlayer={this.exitPlayer} />
      </>
    );
  }
}

export default ControlBar;
