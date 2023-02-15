import { getCategory } from './config';
import axiosApiInstance from "./axiosinterceptor.service";

export const getCategoryListService = {
    getCategoryList
}

async function getCategoryList({ permalink, id }) {
    let queryParam = `?device=web&permalink=${permalink}&id=${id}`;
    return axiosApiInstance.get(`${getCategory.url}${getCategory.path}${queryParam}`)
        .then((res) => res.data);
};

