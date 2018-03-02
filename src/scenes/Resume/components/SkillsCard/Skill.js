import React, {Component} from 'react';
import FadeImage from '../../../../components/FadeImage/FadeImage';

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
            <div className="fl w-20 tc"
                onMouseEnter={() => this.toggleHover()} 
                onMouseLeave={() => this.toggleHover()}>
                    <FadeImage 
                        src={this.state.hover ? this.props.colorImage : this.props.grayImage}
                        style ={{ height: "6rem" }}/>
                    <div>{this.props.name}</div>
            </div>
        )
    }

}