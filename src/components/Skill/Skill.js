import React, {Component} from 'react';
import FadeImage from '../FadeImage/FadeImage';

export default class Skill extends Component {

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
            <div className={`tc ${this.props.className}`}
                onMouseEnter={() => this.toggleHover()} 
                onMouseLeave={() => this.toggleHover()}>
                    <FadeImage
                        src={this.state.hover ? `images/skills/${this.props.name}_Color.svg` : `images/skills/${this.props.name}_Gray.svg`}
                        style={{ height: "6rem" }}
                        imageHeight="4rem"/>
                    <div>{this.props.name}</div>
            </div>
        )
    }

}