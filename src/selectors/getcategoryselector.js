import React from 'react';
import { useSelector } from 'react-redux';
import { pathOr } from 'ramda';
import { __parseresults } from './searchresultsselector';


export function GetCategories() {
    let category = useSelector(state => pathOr([], ['CategoryReducer', 'response', 'result'])(state));
    const result = pathOr([], ['content'])(category);
    return __parseresults(result)
}

export default GetCategories;
