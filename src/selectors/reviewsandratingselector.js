import React from 'react';
import { useSelector } from 'react-redux';
import { pathOr } from 'ramda';

export function ReviewAndRatingsSelector() {
    let reviewandrating = useSelector(state => pathOr(null, ['ReviewsAndRatings', 'result', 'result'])(state));
    let loading = useSelector(state => pathOr(false, ['ReviewsAndRatings', 'loading'])(state));
    return {
        loading,
        overallRating: pathOr(0, ['overallRating'])(reviewandrating),
        reviews: pathOr([], ['reviews'])(reviewandrating),
    }
}

export default ReviewAndRatingsSelector;
