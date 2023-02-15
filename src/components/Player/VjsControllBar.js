import React from "react";
import ReactDOM from "react-dom";
import ControlBar from "./components/ControlBar";
import videojs from "video.js";
// import { VideoJsPlayer } from "video.js";

export const vjsComponent = videojs.getComponent("Component");

export default class VJSControlBar extends vjsComponent {
  constructor(player, options) {
    super(player, options);
    this.state = {
      data: player,
    };
    /* Bind the current class context to the mount method */
    this.mount = this.mount.bind(this);
    /* When player is ready, call method to mount React component */
    player.ready(() => {
      this.mount();
    });
    this.on("click", () => {});

    /* Remove React root when component is destroyed */
    this.on("dispose", () => {
      // ReactDOM.unmountComponentAtNode(this._el);
    });
  }

  mount() {
    ReactDOM.render(
      <ControlBar
        vjsComponent={this}
        playerData={this.state.data}
        body="Episodes"
      />,
      this.el()
    );
  }
}
