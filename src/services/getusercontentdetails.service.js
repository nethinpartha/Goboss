import { contentdetailApi } from "./config";
import axiosApiInstance from "./axiosinterceptor.service";


export const usercontentdetailsService = {
  usercontentdetails
}

async function usercontentdetails(contentId) {
  return axiosApiInstance.get(`${contentdetailApi.url}${contentdetailApi.path}/user-details`, {
    params: {
      contentId,
      device: 'web'
    }
  })
    .then((res) => res.data)
}

