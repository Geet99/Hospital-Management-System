import React from "react";
import "antd/dist/antd.css";
import { Container, Row, Col } from "react-bootstrap";

class InventoryDetails extends React.Component {
  state = {
    inventarray: {
      numberOfCovidBeds: 10,
      numberOfCovidBedsOccupied: 4,
      numberOfICUBeds: 50,
      numberOfICUBedsOccupied: 30,
      numberOfNonCovidBeds: 40,
      numberOfNonCovidBedsOccupied: 26
    }
  };

  render() {
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
            <span style={{ color: "#11999" }}>
              {" "}
              Number of Covid Beds:{" "}{this.state.inventarray.numberOfCovidBeds}
            </span>
          </Col>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              Number of Covid Occupied:{" "}
              {this.state.inventarray.numberOfCovidBedsOccupied}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              Number of ICU Beds:{" "}{this.state.inventarray.numberOfICUBeds}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              Number of ICU Beds Occupied:{" "}
              {this.state.inventarray.numberOfICUBedsOccupied}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              Number of Non-Covid Beds:{" "}
              {this.state.inventarray.numberOfNonCovidBeds}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              Number of Non-Covid Occupied:{" "}
              {this.state.inventarray.numberOfNonCovidBeds}
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default InventoryDetails;
