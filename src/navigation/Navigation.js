import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Strona główna</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Produkty</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;