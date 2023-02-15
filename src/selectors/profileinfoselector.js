import React from 'react';
import { useSelector } from 'react-redux';
import { pathOr } from 'ramda';

export function ProfileInfoSelector() {
  let userInfo = useSelector(state => pathOr(null, ['UserProfile', 'response', 'result'])(state));
  let loading = useSelector(state => pathOr(false, ['UserProfile', 'loading'])(state));
  return {
    loading,
    id: pathOr('', ['id'])(userInfo),
    firstName: pathOr('', ['firstname'])(userInfo),
    lastName: pathOr('', ['lastname'])(userInfo),
    ageGroup: pathOr('', ['ageGroup'])(userInfo),
    gender: pathOr('', ['gender'])(userInfo),
    profilePic: pathOr('', ['profilePic'])(userInfo),
    isDefault: pathOr('', ['isDefault'])(userInfo),
    email: pathOr('', ['email'])(userInfo)
  }
}

export default ProfileInfoSelector;
