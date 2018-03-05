import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {

    return (
        <li className="dib">
            <NavLink to={props.to} 
                className="NavigationItem-link ph4 ph5-ns h2 dib no-underline" 
                activeClassName="NavigationItem-link--active">
                {props.children}
            </NavLink>
        </li>
    )

}

NavigationItem.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
};

export default NavigationItem;