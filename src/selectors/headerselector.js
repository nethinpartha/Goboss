import React from 'react';
import { useSelector } from 'react-redux';
import { pathOr } from 'ramda';

function HeaderResults() {
  return useSelector(state => pathOr('', ['Header', 'records', 'result', 'components'])(state));
}

export const __parseHeaderContent = () => {
  const headercontent = HeaderResults()
  return {
    componentType: pathOr('', ['0', 'componentType'])(headercontent),
    devices: pathOr('', ['0', 'devices'])(headercontent),
    logo: pathOr('', ['0', 'content', 'logo'])(headercontent),
    showSearch: pathOr(false, ['0', 'content', 'isShowSearch'])(headercontent),
    accountIcon: pathOr('', ['0', 'content', 'accountIcon'])(headercontent),
    originals: pathOr(false, ['0', 'content', 'originals'])(headercontent)
  }
}