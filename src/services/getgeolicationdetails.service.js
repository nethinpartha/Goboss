import { geolocation } from './config';
import axios from 'axios';


export const geoLocationService = {
  getGeolocation
}

// the service uses geolocation-db.com as a backend to get the clients geolocation details
// generate a geolocation API key and add it to the environment variable for 
// the application to work properly

async function getGeolocation() {
  return axios.get(`${geolocation.url}${geolocation.path}`)
    .then(res => {
      sessionStorage.setItem('getGeolocationTrue', true);
      return res.data
    })
    .catch(err => sessionStorage.setItem('getGeolocationTrue', null))
}