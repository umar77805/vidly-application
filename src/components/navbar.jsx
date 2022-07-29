import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <h3 className="navbar-brand">
            Navbar{" "}
            <span className="badge rounded-pill bg-secondary">
              {this.props.totalCounters}
            </span>
          </h3>
        </div>
      </nav>
    );
  }
}

export default Navbar;
