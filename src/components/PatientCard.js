import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function PatientCard({ data }) {
  return (
    <Container
      style={{
        border: "1px solid lightgrey",
        textAlign: "left",
        padding: "1rem",
        margin: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#636363",
        fontSize: "0.9rem"
      }}
    >
      <Row>
        <Col sm={12}>
          <strong style={{ color: "#212529" }}>{data.name}</strong>
        </Col>
        <Col sm={12}>
          <span style={{ color: "#999" }}> Room number - {data.roomno}</span>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <span style={{ color: "#999" }}> Covid - {data.covidstatus}</span>
        </Col>
      </Row>
    </Container>
  );
}

export default PatientCard;
