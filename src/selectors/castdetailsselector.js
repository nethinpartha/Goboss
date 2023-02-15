import React from 'react';
import { useSelector } from 'react-redux';
import { pathOr } from 'ramda';

export function CastDetailsSelector() {
  let castdetail = useSelector(state => pathOr(null, ['castdetail', 'response', 'result'])(state));
  let loading = useSelector(state => pathOr(false, ['castdetail', 'loading'])(state));
  return {
    loading,
    profilePic: pathOr('', ['profilePic'])(castdetail),
    isActive: pathOr('', ['isActive'])(castdetail),
    firstName: pathOr('', ['firstName'])(castdetail),
    role: pathOr('', ['role'])(castdetail),
    lastName: pathOr('', ['lastName'])(castdetail),
    permaLink: pathOr('', ['permaLink'])(castdetail),
    description: pathOr('', ['description'])(castdetail),
    gallery: pathOr('', ['gallery'])(castdetail),
    watchHistory: pathOr({}, ['watchHistory'])(castdetail),
    isUserLiked: pathOr(false, ['isUserLiked'])(castdetail),
    isUserAddedToList: pathOr(false, ['isUserAddedToList'])(castdetail),
  }
}

export default CastDetailsSelector;
