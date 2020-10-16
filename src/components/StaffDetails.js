import React from "react";
import "antd/dist/antd.css";
import { Container, Row, Col } from "react-bootstrap";

class StaffDetails extends React.Component {
  state = {
    staffarray: [
      {
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
      },
      {
        id: 2,
        name: "Abhineeta Saini",
        role: "Nurse",
        dob: "12.02.1980",
        age: "40",
        gender: "Male",
        address: "XYZ",
        joinedOn: "1.01.2007",
        isAdmin: "False",
        department: "Dermatology",
        staffrole: "",
        workHours: ""
      },
      {
        id: 2,
        name: "Arnav Sahni",
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
      },
      {
        id: 2,
        name: "Manju Das",
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
      },
      {
        id: 2,
        name: "Neena Saini",
        role: "Nurse",
        dob: "12.02.1980",
        age: "40",
        gender: "Male",
        address: "XYZ",
        joinedOn: "1.01.2007",
        isAdmin: "False",
        department: "Dermatology",
        staffrole: "",
        workHours: ""
      },
      {
        id: 2,
        name: "Narav Modi",
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
      },
      {
        id: 2,
        name: "Geeta Kumar",
        role: "Nurse",
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
    ]

    //   let url = 'https://';
    //   try {
    //     const response = await fetch(url, {
    //       method: 'POST',
    //       body: JSON.stringify({ accountId: awsAccountId }),
    //       credentials: 'same-origin',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Credentials': ''
    //       }
    //     });
    //     const json = await response.json();
  };

  // staffRole: [
  //     {
  //         type : mongoose.Schema.Types.ObjectId,
  //         ref : "staffRole"
  //     }
  // ],
  // workHours :[
  //     {
  //         type : mongoose.Schema.Types.ObjectId,
  //         ref : "workHours"
  //     }
  // ]
  render() {
    return (
      <div>
        {this.state.staffarray.map((record) => (
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
                <strong style={{ color: "#212529" }}>{record.name}</strong>
              </Col>
              <Col sm={12}>
                <span style={{ color: "#999" }}> Role - {record.role}</span>
              </Col>
            </Row>
          </Container>
        ))}
      </div>
    );
  }
}

export default StaffDetails;