import React from 'react';
import { useSelector } from 'react-redux';
import { pathOr } from 'ramda';

export function GetCancellationReasons() {
    let reasons = useSelector(state => pathOr([], ['getcancellationreason', 'response', 'result'])(state));
    let loading = useSelector(state => pathOr(false, ['getcancellationreason', 'loading'])(state));
    return {
        loading,
        reasons
    }
}

export default GetCancellationReasons;
