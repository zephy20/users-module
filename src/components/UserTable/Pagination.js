import React from "react";
import Pagination from "react-bootstrap/Pagination";

export default function PaginationWrapper({
  rowsPerPage,
  rowCount,
  handleSelectPageNumber,
  currentPageNo
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(rowCount / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <Pagination.Item
        key={number}
        active={number === currentPageNo}
        onClick={() => handleSelectPageNumber(number)}
      >
        {number}
      </Pagination.Item>
    );
  });

  return (
    <div className="pageNumberContainer">
      <Pagination>{renderPageNumbers}</Pagination>
    </div>
  );
}
