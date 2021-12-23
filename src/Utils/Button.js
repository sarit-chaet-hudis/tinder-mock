import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} disabled={this.props.disabled}>
        {this.props.buttonText}
      </button>
    );
  }
}

export default Button;
