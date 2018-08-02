import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncreament = e => {
    console.log(e);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncreament({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Click me
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    return this.state.count === 0
      ? "badge badge-secondary m-3"
      : "badge badge-warning m-3";
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
