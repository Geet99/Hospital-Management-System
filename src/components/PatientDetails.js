import React, { useState } from "react";
import PatientCard from "./PatientCard";
// import Buttons from "./Buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function PatientDetails() {
  const [hospitalData, setHospitalData] = useState([]);
  const [searchText, setSearchText] = useState("");
  var xx;
  var xy;

  React.useEffect(() => {
    fetchHospitals(searchText, setHospitalData);
  }, [searchText]);

  xx = hospitalData.filter(
    (x) => x.covidstatus === "negative"
    //searchText === "" || x.roomno.indexOf(searchText) !== -1
  );
  xy = hospitalData.filter(
    (x) => x.covidstatus === "positive"
    //searchText === "" || x.roomno.indexOf(searchText) !== -1
  );
  return (
    <Tabs style={{ marginLeft: "5%" }} defaultActiveKey="1">
      <TabPane tab="Covid" key="1">
        <div className="PatientDetails">
          {/* <h4>Patient Details</h4> */}
          {/* <Buttons fetchHospitals={hospitalData} /> */}
          <Search setSearchText={setSearchText} />
          {xy.map((hospital, _) => (
            <PatientCard data={hospital} key={hospital.id} />
          ))}
        </div>
      </TabPane>

      <TabPane tab="Non Covid" key="2">
        <div className="PatientDetails">
          {/* <h4>Patient Details</h4> */}
          {/* <Buttons fetchHospitals={hospitalData} /> */}
          <Search setSearchText={setSearchText} />

          {xx.map((hospital, _) => (
            <PatientCard data={hospital} key={hospital.id} />
          ))}
        </div>
      </TabPane>
    </Tabs>
  );
}
function fetchHospitals(searchText, setHospitalData) {
  const array = [
    {
      id: 1,
      name: "Kamal Hasan",
      roomno: "403",
      covidstatus: "negative"
    },
    {
      id: 2,
      name: "Joy Singh",
      roomno: "502",
      covidstatus: "positive"
    },
    {
      id: 1,
      name: "Farukh Ahmed",
      roomno: "503",
      covidstatus: "negative"
    },
    {
      id: 2,
      name: "Shamsher Kumar",
      roomno: "102",
      covidstatus: "positive"
    },
    {
      id: 1,
      name: "Komal Sangtani",
      roomno: "413",
      covidstatus: "negative"
    },
    {
      id: 2,
      name: "Rimpy Bhasin",
      roomno: "412",
      covidstatus: "positive"
    }
  ];

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

  setHospitalData(
    array.filter(
      (x) => searchText === "" || x.roomno.indexOf(searchText) !== -1
    )
  );
}
export default PatientDetails;