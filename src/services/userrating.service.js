import { userratings } from './config';
import axiosApiInstance from "./axiosinterceptor.service";

export const userRatingService = {
    userRating,
};

async function userRating(payLoad) {
    return axiosApiInstance.post(`${userratings.url}${userratings.path}?device=web`, {
        ...payLoad
    })
        .then((res) => {
            return res.data;
        })
}