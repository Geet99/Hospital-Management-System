import React from "react";
import "antd/dist/antd.css";
import { Container, Row, Col } from "react-bootstrap";

class PatientSignUpDetails extends React.Component {
  constructor(props){
    super(props);
  }

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
        <legend>Your Details</legend>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Name :</b>{" "}{this.props.name}
            </span>
          </Col>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Date of Birth :</b>{" "}
              {this.props.dob}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Age :</b>{" "}{this.props.age}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Gender :</b>{" "}
              {this.props.gender}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Blood Group :</b>{" "}
              {this.props.bloodgroup}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Weight :</b>{" "}
              {this.props.weight}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Contact Number :</b>{" "}
              {this.props.phone}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Insurance Number :</b>{" "}
              {this.props.insuranceno}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Allergies :</b>{" "}
              {this.props.allergies}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Medical History :</b>{" "}
              {this.props.history}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Emergency Contact Person :</b>{" "}
              {this.props.emername}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Emergency Contact Number :</b>{" "}
              {this.props.emernum}
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PatientSignUpDetails;
