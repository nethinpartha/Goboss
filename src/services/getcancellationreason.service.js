import { getcancellationreasons } from './config';
import { browserName } from "react-device-detect";
import axiosApiInstance from "./axiosinterceptor.service";

export const getCancellationReasonService = {
    getCancellationReason
}

async function getCancellationReason() {
    return axiosApiInstance.get(`${getcancellationreasons.url}${getcancellationreasons.path}?device=web`)
        .then((res) => res.data);
};

