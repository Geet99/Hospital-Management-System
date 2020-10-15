// import React, { useState } from "react";
// // import HospitalCard from "./components/HospitalCard";
// // import Dashboard from "./components/Dashboard";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import Search from "./components/Search";
// import "antd/dist/antd.css";
// // import "./index.css";
// import { Menu } from "antd";
import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
// import { Menu } from "antd";
import PatientDetails from "./PatientDetails";
import StaffDetails from "./StaffDetails";
import InventoryDetails from "./InventoryDetails";

// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Tabs } from "antd";

const { TabPane } = Tabs;

class Admin extends React.Component {
  render() {
    // const { current } = this.state;
    return (
      <Tabs style={{ marginLeft: "4%" }} defaultActiveKey="1">
        <TabPane tab="Patient Details" key="1">
          <PatientDetails />
        </TabPane>

        <TabPane tab="Staff Details" key="2">
          <StaffDetails />
        </TabPane>

        <TabPane tab="Inventory Details" key="3">
          <InventoryDetails />
        </TabPane>
      </Tabs>
    );
  }
}

export default Admin;
