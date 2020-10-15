import React from "react";
import "antd/dist/antd.css";
import { Container, Row, Col } from "react-bootstrap";

class StaffSignUpDetails extends React.Component {
  state = {
    staffarray: {
        id: 1,
        name: "Dr. KK Verma",
        role: "Doctor",
        dob: "12.02.1980",
        age: "40",
        gender: "Male",
        address: "XYZ",
        joinedOn: "1.01.2007",
        isAdmin: "False",
        department: "Dermatology",
        staffrole: "",
        workHours: ""
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
              <b>Name :</b>{" "}{this.state.staffarray.name}
            </span>
          </Col>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Date of Birth :</b>{" "}
              {this.state.staffarray.dob}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Age :</b>{" "}{this.state.staffarray.age}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Gender :</b>{" "}
              {this.state.staffarray.gender}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Role :</b>{" "}
              {this.state.staffarray.role}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Address :</b>{" "}
              {this.state.staffarray.address}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Joining Date :</b>{" "}
              {this.state.staffarray.joinedOn}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Department :</b>{" "}
              {this.state.staffarray.department}
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span style={{ color: "#11999" }}>
              {" "}
              <b>Working Hours :</b>{" "}
              {this.state.staffarray.workingHours}
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StaffSignUpDetails;