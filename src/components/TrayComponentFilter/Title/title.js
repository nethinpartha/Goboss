import React from "react";
import { Card } from "react-bootstrap";

export default function Title({ title = "Trending Movies" }) {
  return (
    <div className="trayfiltertitle">
      <div className="trayfiltertxt">{title}</div>
    </div>
  );
}
