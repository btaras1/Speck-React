import apiOrigin from './api';

export const loginUser = user => {
    return fetch( `${apiOrigin}/api/auth/jwt` , {
        method: 'POST' ,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => res.json());
}