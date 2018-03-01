import React from 'react';
import PropTypes from 'prop-types';

import SVGInline from "react-svg-inline"

const ResumeCard = (props) => {

    return (
        <div className="ResumeCard tl mt3 card bg-white cf">
            <div className="fl w-20">
                <SVGInline 
                    svg={props.svg}
                    cleanup={true}
                    className={`ResumeCard-icon ${props.iconFill}-fill`}/>
            </div>
            <div className="ResumeCard-text fl w-80 pr2 pb2">
                <div>
                    <span className="f4 f3-ns fw6">{props.company}</span>
                    <span className="i f5 f4-ns"> -- {props.title}</span>
                </div>
                <div className="ResumeCard-text-details f5 f4-ns mt1 mt2-ns">{props.children}</div>
            </div>
        </div>
    )

}

ResumeCard.prototype = {
    svg: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
};

export default ResumeCard;