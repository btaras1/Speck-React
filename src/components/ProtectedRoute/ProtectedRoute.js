import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


export const ProtectedRoute = (
    {
    component: Component,
    user,
    to,
    location,
    ...rest
}
) => {
    const { isLoggedIn, isAdmin} = useContext(AuthContext);
return (
        <Route location={location}
        render={props => (user === 'isAdmin' && isAdmin) || (user === 'isLoggedIn' && !isLoggedIn)
            ? <Component {...rest}/>
            : <Redirect to={{ pathname: '/' }} />
        }
    />
    );
}