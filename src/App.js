import Counter from "./components/counter";
import Total from "./components/Total";
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
    total : 0
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

        total: prevState.total + steps,
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
        total: prevState.total > 0 ? prevState.total - steps : prevState.total,
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

        <Total>Total = {this.state.total}</Total>
      </div>
    );
  }
}
