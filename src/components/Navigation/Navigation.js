import React from 'react';
import NavigationItem from "./components/NavigationItem/NavigationItem";


const Navigation = () => {
    return (
        <nav className="Navigation">
            <ul className="list ma0 pa0 pt3 pb1">
                <NavigationItem to="/resume">RESUME</NavigationItem>
                <NavigationItem to="/projects">PROJECTS</NavigationItem>
            </ul>
        </nav>
    )
};

export default Navigation;