import React from "react";
import "antd/dist/antd.css";
import { Container, Row, Col } from "react-bootstrap";

class PatientSignUpDetails extends React.Component {
  state = {
    patientarray: {
        name : "Ravi Prakash",
        dob : "22.08.1999",
        age : "34",
        gender : "Male",
        bloodgroup : "B+",
        phone : 1234567890,
        weight : 65,
        insuranceno : "23453245",
        emergencycontactname : "Rajeev Prakash",
        emergencycontactphone : 3446667488,
        allergies : "Penicilin",
        history : "Heart By-pass surgery in 2015",
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
        <legend>Your Details</legend>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Name :</b>{" "}{this.state.patientarray.name}
            </span>
          </Col>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Date of Birth :</b>{" "}
              {this.state.patientarray.dob}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Age :</b>{" "}{this.state.patientarray.age}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Gender :</b>{" "}
              {this.state.patientarray.gender}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Blood Group :</b>{" "}
              {this.state.patientarray.bloodgroup}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Weight :</b>{" "}
              {this.state.patientarray.weight}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Contact Number :</b>{" "}
              {this.state.patientarray.phone}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Insurance Number :</b>{" "}
              {this.state.patientarray.insuranceno}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Allergies :</b>{" "}
              {this.state.patientarray.allergies}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Medical History :</b>{" "}
              {this.state.patientarray.history}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Emergency Contact Person :</b>{" "}
              {this.state.patientarray.emergencycontactname}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Emergency Contact Number :</b>{" "}
              {this.state.patientarray.emergencycontactphone}
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PatientSignUpDetails;
