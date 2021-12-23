import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  render() {
    return (
      <div className="Counter">
        <div>{this.props.count}</div>
        <div>{this.props.counterImage}</div>
      </div>
    );
  }
}

export default Counter;
