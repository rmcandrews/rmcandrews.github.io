import React, {Component} from 'react';
import Skill from '../../../../components/Skill/Skill';

export default class ExperienceCard extends Component {

    constructor(props) {
        super(props);
        let defaultHover = (window.innerWidth < 992)
        this.state = {
            hover: defaultHover
        };
    }

    toggleHover() {
        if(window.innerWidth < 992) {
            return;
        }
        this.setState({ hover: !this.state.hover })
    }

    render() {
        return (
            <div className="fl w-100 w-50-m w-third-l">
                <div className="card bg-white cf h5 ma2 pa2"
                        onMouseEnter={() => this.toggleHover()} 
                        onMouseLeave={() => this.toggleHover()}>
                    <div style={{height: "171px"}}>
                        <div className="f4 mv2">{this.props.title}</div>
                        <div className="f5 mv1">{this.props.shortDescription}</div>
                        <div className="cf mt1">
                            {
                                this.props.skills.map((skill) => {
                                    return <Skill className="fl w-third mt3" name={skill} key={skill}/>
                                })
                            }
                        </div>
                    </div>
                    <div className="mt3 bt b--black-20 pt2">
                        <img src="images/down-arrow.svg" alt="more" height="35px"/>
                    </div>
                </div>
            </div>
        )
    }

}