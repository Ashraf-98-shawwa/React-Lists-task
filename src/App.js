import Counter from "./components/counter";
import "./App.css";

import React, { Component } from "react";

const counters = [
  { id: 1, count: 0, steps: 1 },
  { id: 2, count: 0, steps: 2 },
  { id: 3, count: 0, steps: 3 },
  { id: 4, count: 0, steps: 4 },
];

export default class App extends Component {
  state = {
    counters,
  };

  onIncrement = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + steps };
          }
          return item;
        }),
      };
    });
  };

  onDecrement = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id) {
            if (item.count > 0) {
              return { ...item, count: item.count - steps };
            }
            return item;
          }
          return item;
        }),
      };
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.counters.map((item) => (
          <Counter
            key={item.id}
            {...item}
            onDecrement={this.onDecrement}
            onIncrement={this.onIncrement}
          />
        ))}
      </div>
    );
  }
}
