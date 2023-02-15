import { reviewsandratings } from './config';
import axiosApiInstance from "./axiosinterceptor.service";
import { browserName } from "react-device-detect";

export const reviewsAndRatingsService = {
    reviewsAndRatings,
};

async function reviewsAndRatings({ contentId }) {
    return axiosApiInstance.get(`${reviewsandratings.url}${reviewsandratings.path}?device=${browserName}&id=${contentId}`)
        .then((res) => res.data);
}
