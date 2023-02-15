import { contentdetailApi } from "./config";
import axiosApiInstance from "./axiosinterceptor.service";


export const likeContentService = {
  likeContent
}

async function likeContent(contentId) {
  return axiosApiInstance.post(`${contentdetailApi.url}${contentdetailApi.path}/like`,
    { contentId },
    {
      params: {
        device: 'web'
      }
    })
    .then((res) => res.data)
}

