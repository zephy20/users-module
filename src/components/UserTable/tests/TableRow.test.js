import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TableRow from "../TableRow";
import { BrowserRouter as Router } from "react-router-dom";

const sampleRow = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
};

describe("TableRow", () => {
  test("renders Table Row component", () => {
    const onClick = jest.fn();

    // as RTL renders into a div as a container by default, so we change that to table to avoid
    // DOM nesting validation error
    const tableBody = document.createElement("tbody");

    const { getByText } = render(
      <Router>
        <TableRow {...sampleRow} deleteUser={onClick} />
      </Router>,
      {
        container: document.body.appendChild(tableBody)
      }
    );
    fireEvent.click(getByText(/Delete/i));
    expect(onClick).toHaveBeenCalled();
  });
});
