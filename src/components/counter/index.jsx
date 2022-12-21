import React, { Component } from "react";
import "./style.css";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <p className="value">{this.props.count}</p>

        <button
          className="decrement"
          onClick={() =>
            this.props.onDecrement(this.props.id, this.props.steps)
          }
        >
          -
        </button>
        <button
          className="increment"
          onClick={() =>
            this.props.onIncrement(this.props.id, this.props.steps)
          }
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
