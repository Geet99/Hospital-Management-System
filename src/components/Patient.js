import React from "react";
import "antd/dist/antd.css";
import PatientSignUpDetails from "./PatientSignUpDetails";
import TreatmentDetails from "./TreatmentDetails";
import { Tabs } from "antd"

const { TabPane } = Tabs;

class Patient extends React.Component {

  constructor(){
    super();
    this.state = {
      patient_details : {},
      id : null,
      emergency : {}
    }
  }

  componentDidMount(){
    fetch("/api/currentuser")
    .then(response => response.json())
    .then(response => {
      const {data} = response;
      this.setState({patient_details : response.forPatient , id : response._id, emergency : response.forPatient.emergencycontact})
    })
  }

  render() {
    // const { current } = this.state;
    return (
      <Tabs style={{ marginLeft: "4%" }} defaultActiveKey="1">
        <TabPane tab="Patient Details" key="1">
          {/* {console.log(this.state.emergency.name)} */}
          <PatientSignUpDetails 
            name = {this.state.patient_details.name}
            dob = {this.state.patient_details.dob}
            age = {this.state.patient_details.age}
            gender = {this.state.patient_details.gender}
            bloodgroup = {this.state.patient_details.bloodgroup}
            weight = {this.state.patient_details.weight}
            phone = {this.state.patient_details.phone}
            insuranceno = {this.state.patient_details.insuranceno}
            allergies = {this.state.patient_details.allergies}
            history = {this.state.patient_details.history}
            emer = {this.state.patient_details.emergencycontact}
            emername = {this.state.emergency.name}
            emernum = {this.state.emergency.phone}
          />
        </TabPane>

        <TabPane tab="Treatment Details" key="2">
          {/* <TreatmentDetails /> */}
        </TabPane>
      </Tabs>
    );
  }
}

export default Patient;