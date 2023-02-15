import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import pathOr from "ramda/src/pathOr";
import { showErrorAlertAction } from '../../../../actions/erroralert.action';
import Autosuggest from "react-autosuggest";
import "./style.scss";
import { useDispatch } from "react-redux";

const lowerCasedValues = (values) =>
  values.map((value, index) => {
    return {
      id: index,
      name: value.toLowerCase(),
    };
  });

const theme = {
  container: "autosuggestioncom__container",
  containerOpen: "autosuggestioncom__container--open",
  input: "autosuggestioncom__input",
  inputOpen: "autosuggestioncom__input--open",
  inputFocused: "autosuggestioncom__input--focused",
  suggestionsContainer: "autosuggestioncom__suggestions-container",
  suggestionsContainerOpen: "autosuggestioncom__suggestions-container--open",
  suggestionsList: "autosuggestioncom__suggestions-list",
  suggestion: "autosuggestioncom__suggestion",
  suggestionFirst: "autosuggestioncom__suggestion--first",
  suggestionHighlighted: "autosuggestioncom__suggestion--highlighted",
  sectionContainer: "autosuggestioncom__section-container",
  sectionContainerFirst: "autosuggestioncom__section-container--first",
  sectionTitle: "react-autosuggest__section-title",
};

const AutoSuggestion = ({
  searchSuggestionList,
  doSearch,
  keyword,
  setKeyword,
  afterthreeletters
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [sugestedValueSelected, setSuggestedValueSelected] = useState("");

  function getSuggestions(value) {
    return lowerCasedValues(searchSuggestionList).filter((data) =>
      data.name.includes(value.trim().toLowerCase())
    );
  }

  const preStateValue = useSelector((state) =>
    pathOr("", ["searchcontent", "keyword"])(state)
  );

  useEffect(() => {
    setValue(preStateValue);
  }, [preStateValue]);

  useEffect(() => {
    setSuggestions([]);
    setSuggestedValueSelected("");
  }, []);

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsClearRequested={() => setSuggestions([])}
      onSuggestionsFetchRequested={({ value }) => {
        setValue(value);
        setSuggestions(getSuggestions(value));
      }}
      onSuggestionSelected={(_, { suggestionValue }) => {
        let targetValue = _.target.value;
        if (targetValue?.length > 2) {
          doSearch(targetValue);
          setSuggestedValueSelected(targetValue);
          setKeyword(targetValue);
          return;
        } else if (targetValue?.length < 3) {
          dispatch(showErrorAlertAction.ShowErrorAlert("Please enter minimum 3 characters to search"));
        } else {
          doSearch(suggestionValue);
          setSuggestedValueSelected(suggestionValue);
          setKeyword(suggestionValue);
        }
      }}
      getSuggestionValue={(suggestion) => suggestion.name}
      renderSuggestion={(suggestion) => <span> {suggestion.name}</span>}
      inputProps={{
        placeholder: "Type to search movies...",
        value: value,
        onChange: (_, { newValue, method }) => {
          setKeyword(newValue);
          if (newValue.length === 0) {
            setSuggestions([]);
            doSearch(newValue);
          }
          if (newValue.length > 2 && method !== "down" && method !== "up") {
            doSearch(newValue);
          }
          if (method === "escape") {
            setValue("");
            setKeyword("");
            setSuggestedValueSelected("");
          }
        },
        onKeyUp: (event) => {
          if (keyword.length === 0 || keyword.length > 2) {
             if (event.charCode === 13 || event.keyCode === 13) {
              doSearch(keyword);
             }
             if(afterthreeletters){
              doSearch(keyword);
             }
          } else {
            if (event.charCode === 13 || event.keyCode === 13) {
              dispatch(showErrorAlertAction.ShowErrorAlert("Please enter minimum 3 characters to search"));
            }
          }
        },
      }}
      highlightFirstSuggestion={true}
      theme={theme}
    />
  );
};

export default AutoSuggestion;
