import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";
import auth from "../services/authService";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      lable: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { lable: "Genre", path: "genre.name" },
    { lable: "Stock", path: "numberInStock" },
    { lable: "Rate", path: "dailyRentalRate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          onClick={() => this.props.onLike(movie)}
          liked={movie.liked}
        ></Like>
      ),
    },
  ];

  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie)}
        className="btn btn-danger w-50"
      >
        Delete
      </button>
    ),
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) {
      this.columns.push(this.deleteColumn);
    }
  }

  render() {
    const { movies, onSort, sortedColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        sortedColumn={sortedColumn}
        onSort={onSort}
        data={movies}
      />
    );
  }
}

export default MoviesTable;
