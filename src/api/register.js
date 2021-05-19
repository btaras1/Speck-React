import apiOrigin from './api';

export const registerUser = user => {
    return fetch( `${apiOrigin}/api/user` , {
        method: 'POST' ,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => res.json());
}