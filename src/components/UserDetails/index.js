import React from "react";
import { Card } from "react-bootstrap";
import "./styles/index.scss";

export default function UserDetailsWrapper({ user }) {
  const { name, email, username, address, phone, website, company } = user;
  return (
    <div className="userDetailsContainer">
      <Card className="leftAligned">
        <Card.Body>
          <Card.Title>Name</Card.Title>
          <Card.Text>{name}</Card.Text>
          <hr />
          <Card.Title>Email</Card.Title>
          <Card.Text>{email}</Card.Text>
          <hr />
          <Card.Title>Username</Card.Title>
          <Card.Text>{username}</Card.Text>
          <hr />
          <Card.Title>Address</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Street</Card.Subtitle>
          <Card.Text>{address.street}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">Suite</Card.Subtitle>
          <Card.Text>{address.suite}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">City</Card.Subtitle>
          <Card.Text>{address.city}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">Zipcode</Card.Subtitle>
          <Card.Text>{address.zipcode}</Card.Text>
          <hr />
          <Card.Title>Phone</Card.Title>
          <Card.Text>{phone}</Card.Text>
          <hr />
          <Card.Title>Website</Card.Title>
          <Card.Text>{website}</Card.Text>
          <hr />
          <Card.Title>Company</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Name</Card.Subtitle>
          <Card.Text>{company.name}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            Catch Phrase
          </Card.Subtitle>
          <Card.Text>{company.catchPhrase}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">BS</Card.Subtitle>
          <Card.Text>{company.bs}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
