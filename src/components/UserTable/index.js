import React from "react";
import Table from "react-bootstrap/Table";
import Pagination from "./Pagination";
import RowsSelector from "./RowsSelector";
import "./styles/wrapper.scss";
import TableRow from "./TableRow";

export default function UserTableWrapper({
  rows,
  rowsPerPage,
  totalRowCount,
  sortInfo,
  sortTableByType,
  handleSelectRowsPerPage,
  handleSelectPageNumber,
  deleteUser,
  currentPageNo
}) {
  return (
    <div className="mainWrapper">
      <RowsSelector handleSelectRowsPerPage={handleSelectRowsPerPage} />
      <div className="tableWrapper">
        <Table bordered>
          <thead>
            <tr>
              <th
                onClick={() =>
                  sortTableByType(
                    "name",
                    sortInfo.order === "inc" && sortInfo.type === "name"
                      ? "dec"
                      : "inc"
                  )
                }
                className="cursorPointer"
              >
                Name &nbsp;
                {sortInfo.type === "name" && (
                  <span>{sortInfo.order === "inc" ? "↑" : "↓"}</span>
                )}
              </th>
              <th>Username</th>
              <th
                onClick={() =>
                  sortTableByType(
                    "email",
                    sortInfo.order === "inc" && sortInfo.type === "email"
                      ? "dec"
                      : "inc"
                  )
                }
                className="cursorPointer"
              >
                Email &nbsp;
                {sortInfo.type === "email" && (
                  <span>{sortInfo.order === "inc" ? "↑" : "↓"}</span>
                )}
              </th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(item => (
              <TableRow key={item.id} {...item} deleteUser={deleteUser} />
            ))}
          </tbody>
        </Table>
      </div>
      <Pagination
        rowCount={totalRowCount}
        rowsPerPage={rowsPerPage}
        currentPageNo={currentPageNo}
        handleSelectPageNumber={handleSelectPageNumber}
      />
    </div>
  );
}
