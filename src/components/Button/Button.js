import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({
    text,
    route
}) => {
    return (
        
        <Link to= {route} className="Button">{ text }</Link>

    );
}

export default Button;