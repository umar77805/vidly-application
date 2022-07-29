import React, { Component } from "react";
import Pagination from "./common/pagination";
import Genre from "./common/listgroup";
import SearchBox from "./common/searchBox";
import { paginate } from "./utils/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { deleteMovie, getMovies } from "../services/movieService";
import { getGenres } from "../services/genreService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class Movies extends Component {
  state = {
    movies: [],
    mcount: 0,
    items: [],
    currentPage: 1,
    pageSize: 4,
    currentGenre: null,
    sortedColumn: { path: "title", order: "asc" },
    searchQuery: "",
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const items = [...data];

    const { data: movies } = await getMovies();
    this.setState({
      movies,
      items,
      mcount: getMovies().length,
      currentGenre: "All Genre",
    });
  }

  handleDelete = async (movie) => {
    const orignalMovies = this.state.movies;
    const movies = orignalMovies.filter((m) => m._id !== movie._id);
    this.setState({ movies });

    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("Movie already deleted.");
      }
      this.setState({ movies: orignalMovies });
    }
  };

  handleLike = (movie) => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSort = (sortedColumn) => {
    this.setState({ sortedColumn });
  };

  getPagedData = () => {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      currentGenre,
      searchQuery,
      sortedColumn,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (currentGenre && currentGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === currentGenre._id);

    const sorted = _.orderBy(
      filtered,
      [sortedColumn.path],
      [sortedColumn.order]
    );
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentGenre: null, currentPage: 1 });
  };

  render() {
    const {
      mcount,
      items,
      pageSize,
      currentPage,
      currentGenre,
      searchQuery,
      sortedColumn,
    } = this.state;

    const { user } = this.props;

    if (mcount === 0) {
      return (
        <h2 className="d-flex justify-content-center">
          There are no movies in the list
        </h2>
      );
    }

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <React.Fragment>
        <h2 className="d-flex justify-content-center">
          There are {totalCount} movies in the list
        </h2>
        <div className="d-flex ">
          <Genre
            currentGenre={currentGenre}
            genreItems={items}
            onGenreChange={this.handleGenreChange}
          />
          <div className="w-100">
            <SearchBox onChange={this.handleSearch} value={searchQuery} />
            <MoviesTable
              movies={movies}
              sortedColumn={sortedColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            {user && (
              <Link to="/movies/new" className="btn btn-primary">
                Add movie
              </Link>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
