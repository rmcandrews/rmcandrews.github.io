import React, {Component} from 'react';
import FadeImage from '../../../../components/FadeImage/FadeImage';

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
            <div className="ResumeCard tl mt3 card bg-white cf"
                    onMouseEnter={() => this.toggleHover()} 
                    onMouseLeave={() => this.toggleHover()}>
                <div className="fl w-20 pl2 pl3-m pl4-l pt2 pb2">
                    <FadeImage 
                        src={this.state.hover ? this.props.colorImage : this.props.grayImage}
                        style ={{ maxHeight: "8rem" }}/>
                </div>
                <div className="ResumeCard-text fl w-80 pr2 pb2">
                    <div>
                        <span className="f4 f3-ns fw6">{this.props.company}</span>
                        <span className="i f5 f4-ns"> -- {this.props.title}</span>
                    </div>
                    <div className="ResumeCard-text-details f5 f4-ns mt1 mt2-ns">{this.props.children}</div>
                </div>
            </div>
        )
    }

}