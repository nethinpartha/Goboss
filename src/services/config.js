const URL = process.env.REACT_APP_API_DOMAIN;
const tenantName = process.env.REACT_APP_TENANTNAME;
const geoapikey = process.env.REACT_APP_GEOLOCATION_DB_API_KEY;
const apiURI = `/cpaas/v1/${tenantName}`;
let themeApiURI;
if (tenantName === 'classic') {
  themeApiURI = `/cpaas/v1/dorm`;
} else {
  themeApiURI = `/cpaas/v1/${tenantName}`
}
export const config = {
  //apiUrl: "http://localhost:6060",
  //apiUrl: "https://devcmsapi.c-paas.com",
  apiUrl: URL,
  getApiToken: `/cpaas/auth/v1/${tenantName}/get-api-token`,
  apiUser: "vuedata",
  apiPassword: "vuedata@123",
  cryptoCipherKey: "VueData",
  cryptoCipherIv: "VueData@123",
};

export const themeConfig = {
  apiUrl: URL,
  getApiToken: `${themeApiURI}/themes`,
  apiUser: "vuedata",
  apiPassword: "vuedata@123",
  cryptoCipherKey: "VueData",
  cryptoCipherIv: "VueData@123",
};

export const preSignInEmailVal = {
  apiUrl: URL,
  getApiToken: `${apiURI}/user/validate-email`,
};

export const signIn = {
  apiUrl: URL,
  getApiToken: `${apiURI}/user/login`,
};
export const signOut = {
  apiUrl: URL,
  getApiToken: `${apiURI}/user/logout`,
};

export const rotateSignInKey = {
  apiUrl: URL,
  getAccessKeyToken: `${apiURI}/user/refresh-token`,
};

export const resetPassEmail = {
  apiUrl: URL,
  resetPassword: `${apiURI}/user/send-resetpwd-email`,
};
export const verifyEmail = {
  apiUrl: URL,
  path: `${apiURI}/user/verify-email`,
};

export const resetPass = {
  apiUrl: URL,
  getApiToken: `${apiURI}/user/reset-password`,
};

export const signup = {
  apiUrl: URL,
  getApiToken: `${apiURI}/user/signup`,
};

export const userinfo = {
  apiUrl: URL,
  path: `${apiURI}/user`,
};

export const updateEmail = {
  url: URL,
  path: `${apiURI}/email`,
};

export const updatePasswordConf = {
  url: URL,
  path: `${apiURI}/user/update-password`,
};

export const updatePhoneNo = {
  url: URL,
  path: `${apiURI}/updatephonenumber`,
};


export const analyticsApi = {
  url: "https://analytics.c-paas.com",
  path: `${apiURI}/analytics/event`,
};

export const loggerApi = {
  url: "http://localhost:7000",
  path: "/logger",
};

export const contentdetailApi = {
  url: URL,
  path: `${apiURI}/content`,
};

export const watchList = {
  url: URL,
  path: `${apiURI}/user/list`,
}

export const wathduration = {
  url: URL,
  path: `${apiURI}/content/watch`,
}


export const clearAllList = {
  url: URL,
  path: `${apiURI}/user/clear-list`
}

export const castDetails = {
  url: URL,
  path: `${apiURI}/cast`
}

export const watchduration = {
  url: URL,
  path: `${apiURI}/watch`
}

export const geolocation = {
  url: 'https://geolocation-db.com/json',
  path: `/${geoapikey}`
}

export const subscriptionPlan = {
  url: URL,
  path: `${apiURI}/subscription/plans`
}
export const paymentMethods = {
  url: URL,
  path: `${apiURI}/get-payment-method`
}
export const updatePaymentMethods = {
  url: URL,
  path: `${apiURI}/update-payment-method`
}
export const removePaymentMethod = {
  url: URL,
  path: `${apiURI}/remove-payment-method`
}

export const buySubscription = {
  url: URL,
  path: `${apiURI}/buy-subscription`
}

export const getUserProfile = {
  url: URL,
  path: `${apiURI}/profile/get-profile`
}
export const updateProfileInfo = {
  url: URL,
  path: `${apiURI}/profile/update-profile`
}

export const activatedevice = {
  url: URL,
  path: `${apiURI}/user/activate-device`
}

export const cleardevices = {
  url: URL,
  path: `${apiURI}/user/clear-devices`
}

export const clearIndividualDevice = {
  url: URL,
  path: `${apiURI}/user/deactivate-device`
}

export const getActiveDevice = {
  url: URL,
  path: `${apiURI}/user/get-active-devices`
}


// Pages configs
export const getHomePageContent = {
  url: URL,
  path: `${apiURI}/pages/home`
}

export const tos = {
  url: URL,
  pattern: `${apiURI}/pages/terms-of-service`,
};
export const privacy = {
  url: URL,
  pattern: `${apiURI}/pages/privacy-policy`,
};
export const about = {
  url: URL,
  pattern: `${apiURI}/pages/about-us`,
};

export const footerApi = {
  url: URL,
  path: `${apiURI}/pages/footer`
}

export const headerApi = {
  url: URL,
  path: `${apiURI}/pages/header`
}

export const getFilterParams = {
  url: URL,
  path: `${apiURI}/content/get-filter-params`
}

export const getFilterCounts = {
  url: URL,
  path: `${apiURI}/content/get-filter-count`
}

export const getSearchSuggestions = {
  url: URL,
  path: `${apiURI}/search/suggestion/film`
}

export const searchfiltercontent = {
  url: URL,
  path: `${apiURI}/content/filter`
}

export const getcancellationreasons = {
  url: URL,
  path: `${apiURI}/subscription/get-cancellation-reasons`
}

export const cancelsubscriptions = {
  url: URL,
  path: `${apiURI}/subscription/cancel-subscription`
}

export const updateuserdetails = {
  url: URL,
  path: `${apiURI}/user`
}
export const userratings = {
  url: URL,
  path: `${apiURI}/content/rating`
}

export const reviewsandratings = {
  url: URL,
  path: `${apiURI}/content/rating-review`
}

export const getCategory = {
  url: URL,
  path: `${apiURI}/category`
}