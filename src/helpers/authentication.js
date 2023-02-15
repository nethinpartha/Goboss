import { pathOr } from 'ramda';
import { equals } from 'ramda';
import Cookies from 'js-cookie';
import { decrypt } from './aes';


// get cookies value by name
export const getCookie = (name) => Cookies.get(name);

// delete cookie by name
export const deleteCookie = (name) => Cookies.remove(name);

// get the sign in status of user helper function
export const signedIn = async () => {
    const __parsedData = JSON.parse(getCookie('signInStatus'));
    const decrpytedcookie = await getCookie('signInStatus') ? decrypt(__parsedData) : "";
    return decrpytedcookie
};

// validate if user is signed in helper function
export const isSignedIn = async () => {
    const decryptdata = await signedIn();
    const __parseData = JSON.parse(decryptdata);
    return equals(200, pathOr('', ['responseCode'])(__parseData));
}


