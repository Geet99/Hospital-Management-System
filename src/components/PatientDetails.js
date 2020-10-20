import React, { useState } from "react";
import PatientCard from "./PatientCard";
// import Buttons from "./Buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function PatientDetails() {
  const [covidpatients, setCovidpatients] = useState([]);
  const [noncovidpatients, setNoncovidpatients] = useState([]);
  const [errors, setErrors] = useState("");
  const [searchText, setSearchText] = useState("");
  // var covid;
  // var noncovid;

  async function fetchData() {
    var res = await fetch("/api/allpatients");
    res
      .json()
      .then(res => setCovidpatients(res.covidpatients))
      // .then(res => setNoncovidpatients(res.noncovidpatients))
      .catch(err => setErrors(err));
    res = await fetch("/api/allpatients");
      res
        .json()
        .then(res => setNoncovidpatients(res.noncovidpatients))
        // .then(res => setNoncovidpatients(res.noncovidpatients))
        .catch(err => setErrors(err));
  }

  var t;

  React.useEffect(() => {
    fetchData();
  });

  return (
    <Tabs style={{ marginLeft: "5%" }} defaultActiveKey="1">
      <TabPane tab="Covid" key="1">
        <div className="PatientDetails">
          <Search setSearchText={setSearchText} />
          {covidpatients.map((patient) => (
            <PatientCard  
              name = {patient.forPatient.name}
              {...t = patient.forPatient.treatment}
              admittedon = {t.admittedon}
            />
          ))}
        </div>
      </TabPane>

      <TabPane tab="NonCovid" key="2">
        <div className="PatientDetails">
          <Search setSearchText={setSearchText} />
          {noncovidpatients.map((patient) => (
            <PatientCard  
              name = {patient.forPatient.name}
              {...t = patient.forPatient.treatment}
              admittedon = {t.admittedon}
            />
          ))}
        </div>
      </TabPane>
    </Tabs>
  );
}
export default PatientDetails;
