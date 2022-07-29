import React, { Component } from "react";

//columns: Array
//sortedcolumn: obj
//onSort: func

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortedColumn = { ...this.props.sortedColumn };
    if (sortedColumn.path === path) {
      sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortedColumn.path = path;
      sortedColumn.order = "asc";
    }
    this.props.onSort(sortedColumn);
  };

  renderSortIcon = (column) => {
    const { sortedColumn } = this.props;
    if (column.path !== sortedColumn.path) return null;
    if (sortedColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.path || column.key}
              className="clickable"
              onClick={() => this.raiseSort(column.path)}
              scope="col"
            >
              {column.lable} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
