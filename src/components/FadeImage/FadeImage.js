import React, { Component } from "react";
import PropTypes from "prop-types";

export default class FadeImage extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        topSrc: props.src,
        bottomOpacity: 0,
        bottomSrc: props.src
      };
    }

    componentWillReceiveProps(newProps) {
        const oldSrc = this.state.topSrc;
        const newSrc = newProps.src;
        if (newSrc !== oldSrc) {
          // Reset the component everytime we receive new prop, to
          // cancel out any animation that's still going on
          this.setState({ bottomSrc: false, topSrc: false }, () =>
            this.setState(
              // Opacity less than 1 takes precendence in stacking order
              { bottomSrc: oldSrc, topSrc: newSrc, bottomOpacity: 0.99 },
              () => {
                // One of the few times setTimeout does wonders, this is for
                // getting fade out transition without css keyframe
                if (!this.timeout) clearTimeout(this.timeout);
                this.timeout = setTimeout(
                  () => this.setState({ bottomOpacity: 0 }),
                  20
                );
              }
            )
          );
        }
    }

    render() {
        const { duration, timingFunction, delay, style, alt, imageHeight } = this.props;
        const { topSrc, bottomOpacity, bottomSrc } = this.state;
        return (
          <div className="tc" style={{ ...defaultStyle, ...{ position: "relative" } }}>
            {topSrc &&
              <img
                style={{ ...defaultStyle, ...style, ...{ position: "absolute", height: imageHeight } }}
                src={topSrc}
                alt={alt}
              />}
            {bottomSrc &&
              <img
                style={{
                  ...defaultStyle,
                  ...style,
                  ...{
                    opacity: bottomOpacity,
                    height: imageHeight,
                    transition: `opacity ${duration / 1000}s ${timingFunction} ${delay / 1000}s`
                  }
                }}
                src={bottomSrc}
                alt={alt}
              />}
          </div>
        );
    }
}
    
const defaultStyle = { maxWidth: "100%", maxHeight: "100%" };

FadeImage.propTypes = {
    alt: PropTypes.string,
    duration: PropTypes.number,
    timingFunction: PropTypes.string,
    delay: PropTypes.number,
    style: PropTypes.object
};

FadeImage.defaultProps = {
    duration: 500,
    timingFunction: "ease",
    delay: 0
};