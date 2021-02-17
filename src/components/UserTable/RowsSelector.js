import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function RowsSelector({ handleSelectRowsPerPage }) {
  return (
    <div className="bottomSpacing">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Rows Per Page
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleSelectRowsPerPage(4)}>
            4
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelectRowsPerPage(8)}>
            8
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelectRowsPerPage(16)}>
            16
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
