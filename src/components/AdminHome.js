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
import Admin from "./components/Admin";
// import StaffDetails from "./components/StaffDetails";
// import InventoryDetails from "./components/InventoryDetails";

// // import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
// import { Tabs } from "antd";

// const { TabPane } = Tabs;

class AdminHome extends React.Component {
  render() {
    // const { current } = this.state;
    return <Admin />;
  }
}

export default AdminHome;
