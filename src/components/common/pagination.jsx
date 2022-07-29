import React from "react";
import PropsType from "prop-types";
import _ from "lodash";

const Pagination = ({ onPageChange, itemsCount, pageSize, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);
  if (pageCount === 1) return null;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <p
              onClick={() => onPageChange(page)}
              className="page-link"
              style={{ cursor: "pointer" }}
            >
              {page}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propsType = {
  onPageChange: PropsType.func.isRequired,
  itemsCount: PropsType.number.isRequired,
  pageSize: PropsType.number.isRequired,
  currentPage: PropsType.number.isRequired,
};

export default Pagination;
