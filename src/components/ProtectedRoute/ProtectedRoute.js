import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const ProtectedRoute = (
    {
    component: Component,
    isAdmin,
    isLoggedIn,
    user,
    to,
    location,
    ...rest
}
) => <Route location={location}
        render={props => (user === 'isAdmin' && isAdmin) || (user === 'isLoggedIn' && isLoggedIn)
            ? <Component {...rest}/>
            : <Redirect to={{ pathname: '/' }} />
        }
    />;