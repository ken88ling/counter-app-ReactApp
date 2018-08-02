import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  constructor() {
    super();
    this.handleIncreament = this.handleIncreament.bind(this); // binding method
  }

  handleIncreament() {
    console.log("Increment Clicked", this);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncreament}
          className="btn btn-secondary btn-sm"
        >
          Click me
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    return "badge badge-secondary m-2";
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
