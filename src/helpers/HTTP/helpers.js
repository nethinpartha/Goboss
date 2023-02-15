export const __checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
};
export const __parseJSON = response => {
    return response.json();
};

export const __parseParamsToQuery = params => {
    if (!params) return '';
    return (
        '?' +
        Object.keys(params)
            .map(key => key + '=' + encodeURI(params[key]))
            .join('&')
    );
};

export const get = (url, params) => {
    const queryString = __parseParamsToQuery(params);
    return fetch(url + queryString, { credentials: 'same-origin' })
        .then(__checkStatus)
        .then(__parseJSON).catch(err => console.log(err));
};

export const post = (url, payload) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload)
    })
        .then(__checkStatus)
        .then(__parseJSON).catch(err => console.log(err));
};