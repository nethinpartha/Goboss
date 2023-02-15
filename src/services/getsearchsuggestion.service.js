import { getSearchSuggestions } from './config';
import axiosApiInstance from "./axiosinterceptor.service";

export const getSearchSuggestionsService = {
  getSearchSuggestion,
};

async function getSearchSuggestion() {
  return axiosApiInstance(`${getSearchSuggestions.url}${getSearchSuggestions.path}`, {
    params: {
      device: 'web'
    }
  })
    .then((res) => res.data);
}
