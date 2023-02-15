import { updateuserdetails } from './config';
import axiosApiInstance from "./axiosinterceptor.service";

export const updateUserInfoService = {
    updateUserInfo,
};

async function updateUserInfo(payLoad) {
    return axiosApiInstance
        .put(`${updateuserdetails.url}${updateuserdetails.path}?device=web`, {
            ...payLoad
        })
        .then((res) => {
            return res.data;
        })
}