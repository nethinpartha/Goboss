import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { DropdownStyle } from "./dropdownstyle";
const SeasonsAndEpisodeSelector = ({
  episodes = ["ep1", "ep2"],
  seasons = 1,
}) => {
  return (
    <Dropdown style={DropdownStyle.dropdownContainer()}>
      {seasons > 1 ? (
        <DropdownButton id="season-selector" title="Select Season">
          {Array.from(Array(seasons), (_, i) => (
            <Dropdown.Item key={i + 1}>Season {i + 1}</Dropdown.Item>
          ))}
        </DropdownButton>
      ) : (
        <p style={DropdownStyle.seasonsAndEpisodes()}>Season {seasons}</p>
      )}
      <p style={DropdownStyle.seasonsAndEpisodes()}>
        Episodes {episodes.length}
      </p>
    </Dropdown>
  );
};
export default SeasonsAndEpisodeSelector;
