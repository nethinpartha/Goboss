import { encrypt, decrypt } from './aes';
import { pickAll } from 'ramda';

export const WhiteList = async (state) => {
    let whitelist = await encrypt(JSON.stringify(pickAll(['ThemeState'], state)));
    return whitelist;
}

export const encryptstore = async (serialisedState) => {
    let whitelist = await encrypt(serialisedState);
    return whitelist;
}

export const decryptstore = async (serialisedState) => {
    let decryptstorevalue = await decrypt(serialisedState);
    return decryptstorevalue;
}