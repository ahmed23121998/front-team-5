import React from "react";
import Card from "react-bootstrap/Card";
import "./card.css";
export function PortfolioCard({ content, bgColor }) {
  return (
    <>
      <Card
        className="custom-card text-center" id="custom-card"
        style={{ backgroundColor: `${bgColor}` }}
      >
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title className="card-title" id="card-title">{content}</Card.Title>
          <hr className="card-line" id="card-line" />
        </Card.Body>
      </Card>
    </>
  );
}
