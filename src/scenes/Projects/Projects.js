import React, { Component } from 'react';
import Project from './components/Project/Project';

class Projects extends Component {

    render() {
        return (
            <div className="pv4">
                <div className="f3">PROJECTS</div>
                <div className="ma3">
                    <Project title="This Website"
                        shortDescription="A website to show off my mad skillz"
                        skills={["React", "GitHub", "Sass"]}/>
                    <Project title="Charlie Rice"
                        shortDescription="A college football pick'em pool web app"
                        skills={["Angular", "Firebase", "Lambda"]}/>
                    <Project title="Fun Fact Bot"
                        shortDescription="A Reddit bot that shares it's knowledge"
                        skills={["NodeJS", "AWS", "Reddit"]}/>
                </div>
            </div>
        )
    }

}

export default Projects;