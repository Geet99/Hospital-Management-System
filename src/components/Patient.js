import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
// import { Menu } from "antd";
import PatientSignUpDetails from "./PatientSignUpDetails";
import TreatmentDetails from "./TreatmentDetails";
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Tabs } from "antd"

const { TabPane } = Tabs;

class Patient extends React.Component {
  render() {
    // const { current } = this.state;
    return (
      <Tabs style={{ marginLeft: "4%" }} defaultActiveKey="1">
        <TabPane tab="Patient Details" key="1">
          <PatientSignUpDetails />
        </TabPane>

        <TabPane tab="Treatment Details" key="2">
          {/* <TreatmentDetails /> */}
        </TabPane>
      </Tabs>
    );
  }
}

export default Patient;