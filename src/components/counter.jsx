import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <div className={this.getBadgeColor()}>{this.changeCount()}</div>
          </div>

          <div className="col">
            <button
              onClick={() => this.props.onIncreament(this.props.counter)}
              className="btn btn-secondary"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecreament(this.props.counter)}
              className="btn btn-secondary m-2"
              disabled={this.props.counter.value !== 0 ? false : true}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger"
            >
              x
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeColor() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  changeCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
