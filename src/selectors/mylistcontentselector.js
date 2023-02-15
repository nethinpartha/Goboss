import React from 'react';
import { pathOr } from 'ramda';
import { useSelector } from 'react-redux';


export function WatchListContent() {
  let list = useSelector((state) => pathOr([], ['watchlist', 'list', 'result'])(state));
  return {
    results: list.length > 0 ? list.map((item, index) => {
      return {
        title: pathOr('', ['title'])(item),
        permaLink: pathOr('', ['permaLink'])(item),
        duration: pathOr('', ['duration'])(item),
        gallery: pathOr('', ['gallery'])(item),
        id: pathOr(index, ['id'])(item),
        yearOfRelease: pathOr('', ['customData', 'yearOfRelease'])(item),
        genres: pathOr([], ['genres'])(item),
        runtime: pathOr(0, ['runtime'])(item),
        watchHistory: pathOr({}, ['watchHistory'])(item),
        watchHistoryDuration: pathOr(0, ['watchHistory', 'duration'])(item)
      }
    }) : list,
  };
}