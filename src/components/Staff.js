import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
// import { Menu } from "antd";
import StaffSignUpDetails from "./StaffSignUpDetails";
import StaffInventoryDetails from "./StaffInventoryDetails";
import PatientTreatmentDetails from "./PatientTreatmentDetails";
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
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
          <StaffInventoryDetails />
        </TabPane>
      </Tabs>
    );
  }
}

export default Staff;