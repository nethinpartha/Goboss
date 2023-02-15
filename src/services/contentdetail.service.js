import { contentdetailApi } from "./config";
import axiosApiInstance from "./axiosinterceptor.service";

export const getcontentdetailsService = {
  contentdetails,
};

async function contentdetails(permalink) {
  return axiosApiInstance
    .get(`${contentdetailApi.url}${contentdetailApi.path}`, {
      params: { permaLink: `${permalink}`, device: 'web' },
    })
    .then((res) => res.data)
}


