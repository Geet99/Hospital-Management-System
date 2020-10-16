import React from "react";
import "antd/dist/antd.css";
import StaffSignUpDetails from "./StaffSignUpDetails";
import InventoryDetails from "./StaffInventoryDetails";
import PatientTreatmentDetails from "./PatientTreatmentDetails";
import { Tabs } from "antd"

const { TabPane } = Tabs;

class Staff extends React.Component {
  render() {
    // const { current } = this.state;
    return (
      <Tabs style={{ marginLeft: "4%" }} defaultActiveKey="1">
        <TabPane tab="Staff Details" key="1">
          <StaffSignUpDetails />
        </TabPane>

        <TabPane tab="Patients' Treatment Details" key="2">
          <PatientTreatmentDetails />
        </TabPane>

        <TabPane tab="Inventory Details" key="3">
          <InventoryDetails />
        </TabPane>
      </Tabs>
    );
  }
}

export default Staff;