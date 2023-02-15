import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import pathOr from "ramda/src/pathOr";
import { getwatchlistAction } from "../actions/getwatchlist.action";
import { addtowatchlistAction } from "../actions/addToWatchList.action";
import { showAlertAction } from "../actions/showalert.action";
import { WatchListContent } from "../selectors/mylistcontentselector";
import { __parseThemeSelector } from '../selectors/themestyleselector';

export const useMyListSelector = () => {
  const loading = useSelector((state) =>
    pathOr(false, ["watchlist", "loading"])(state)
  );
  const dispatch = useDispatch();
  let watchlist = WatchListContent();
  let results = pathOr([], ["results"])(watchlist);
  const { colors } = __parseThemeSelector();
  const { primaryTxtColor } = colors;
  useEffect(() => {
    dispatch(getwatchlistAction.watchList());
  }, []);

  function handleDeleteWatchList(id) {
    if (!id) return;
    dispatch(addtowatchlistAction.addTolist(id));
  }

  function handleclearall() {
    dispatch(
      showAlertAction.ShowAlertModal({
        title: "My List",
        body: "Clear all list items ?",
      })
    );
  }

  function handleAcceptanceMylist() {
    if (results && results.length < 0) return;
    dispatch(getwatchlistAction.clearAllFromList());
  }

  useEffect(() => { }, [results]);
  return { loading, results, handleclearall, handleAcceptanceMylist, handleDeleteWatchList, watchlist, primaryTxtColor }
}