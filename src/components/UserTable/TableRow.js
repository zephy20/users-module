import Button from "react-bootstrap/Button";
import React from "react";
import { Link } from "react-router-dom";

export default function TableRow({
  id,
  name,
  username,
  email,
  address,
  website,
  phone,
  company,
  deleteUser
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        {`${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`}
      </td>
      <td>{phone}</td>
      <td>{website}</td>
      <td>{company.name}</td>
      <td>
        <div className="flex alignItemscenter">
          <Link to={`/users?id=${id}`}>
            <Button variant="outline-primary" size="sm">
              View
            </Button>
          </Link>
          <Button
            variant="outline-danger"
            className="leftSpacing"
            size="sm"
            onClick={() => deleteUser(id)}
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
}
