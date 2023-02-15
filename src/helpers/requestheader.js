

import { __decrypttoken } from './aes'

export const requestHeader = (requestBody) => {
    const auth = __decrypttoken();
    return {
        method: 'POST',
        headers: new Headers({
            'Authorization': `Bearer ${auth}`,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            ...requestBody
        })
    }
}

// export const errorBoundary