import React from 'react';
import NavigationItem from "./components/NavigationItem/NavigationItem";


const Navigation = () => {
    return (
        <nav>
            <ul className="list ma0 pa0 pt3 pb1 bg-light-gray">
                <NavigationItem to="/resume">RESUME</NavigationItem>
                <NavigationItem to="/projects">PROJECTS</NavigationItem>
            </ul>
        </nav>
    )
};

export default Navigation;