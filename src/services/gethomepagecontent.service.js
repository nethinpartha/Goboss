import { getHomePageContent } from './config';
import axiosApiInstance from "./axiosinterceptor.service";


export const getHomePageContentService = {
  getHomePageContents
}

async function getHomePageContents() {
  return axiosApiInstance.get(`${getHomePageContent.url}${getHomePageContent.path}`, {
    params: {
      device: 'web'
    }
  })
    .then((res) => res.data)
}
