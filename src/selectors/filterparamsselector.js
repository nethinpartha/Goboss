import React from 'react';
import { useSelector } from 'react-redux';
import { pathOr } from 'ramda';

export const Filterparmsselector = () => {
  let filterparams = useSelector(state => pathOr(null, ['Searchfilterparams', 'result', 'result'])(state));
  let loading = useSelector(state => pathOr(null, ['Searchfilterparams', 'loading'])(state));
  return {
    loading,
    filterparams
  }
}

