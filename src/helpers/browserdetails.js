import { browserName, browserVersion } from "react-device-detect";


export const getBrowserDetails = () => {
  return `${browserName},${browserVersion}`
}