import React from "react";
import { Link, NavLink } from "react-router-dom";

const VidlyNavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div>
          <Link className="navbar-brand text-dark m-0" to="/">
            Vidly
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              className="nav-link text-dark"
              aria-current="page"
              to="/movies"
            >
              Movies
            </NavLink>
            <NavLink className="nav-link text-dark" to="/customers">
              Customers
            </NavLink>
            <NavLink className="nav-link text-dark" to="/rentals">
              Rentals
            </NavLink>
            {!user && (
              <React.Fragment>
                <NavLink className="nav-link text-dark" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link text-dark" to="/register">
                  Register
                </NavLink>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <NavLink className="nav-link text-dark" to="/profile">
                  {user.name}
                </NavLink>
                <NavLink className="nav-link text-dark" to="/logout">
                  Logout
                </NavLink>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default VidlyNavBar;
