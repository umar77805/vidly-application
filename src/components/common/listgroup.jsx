import React from "react";

const Genre = ({ genreItems, onGenreChange, currentGenre }) => {
  return (
    <ul className="list-group m-5 w-25">
      <li
        key="All Genre"
        onClick={() => onGenreChange("All Genre")}
        className={
          currentGenre === "All Genre"
            ? "list-group-item active"
            : "list-group-item"
        }
        style={{ cursor: "pointer" }}
      >
        All Genre
      </li>
      {genreItems.map((item) => (
        <li
          key={item._id}
          onClick={() => onGenreChange(item)}
          className={
            currentGenre === item ? "list-group-item active" : "list-group-item"
          }
          style={{ cursor: "pointer" }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Genre;
