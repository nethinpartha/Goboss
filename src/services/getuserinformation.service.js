import { userinfo } from "./config";
import axiosApiInstance from "./axiosinterceptor.service";


export const userinformationdetailsService = {
  userinformationdetails
}

async function userinformationdetails() {
  return axiosApiInstance.get(`${userinfo.apiUrl}${userinfo.path}`, {
    params: {
      device: 'web'
    }
  })
    .then((res) => res.data)
}

