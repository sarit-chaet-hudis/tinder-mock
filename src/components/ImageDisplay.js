import React from "react";
import "./ImageDisplay.css";

class ImageDisplay extends React.Component {
  render() {
    return <div className="bigImage">{this.props.image}</div>;
  }
}

export default ImageDisplay;
