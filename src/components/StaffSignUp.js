import { Form, Input, Button, Select } from "antd";
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';

class StaffSignUp extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div>
          <form action="/signup/staff" method="POST">
            <div>
              <label for="name"> Name : </label>
              <Input
                style={{ width: 180 }}
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              ></Input>
            </div>
            <div>
              <label for="username"> Username :</label>
              <Input
                style={{ width: 180 }}
                type="email"
                name="username"
                placeholder="Enter your email"
                required
              ></Input>
            </div>
            <div>
              <label for="password"> Password :</label>
              <Input
                style={{ width: 180 }}
                type="password"
                name="password"
                minlength="8"
                placeholder="Should be atleast 8 characters"
                required
              ></Input>
            </div>
            <div>
              <label for="dob"> DOB :</label>
              <Input
                style={{ width: 180 }}
                type="text"
                name="dob"
                placeholder="Enter string"
                required
              ></Input>
            </div>
            <div>
              <label for="age"> Age:</label>
              <Input
                style={{ width: 180 }}
                type="text"
                name="age"
                placeholder="Enter string"
                required
              ></Input>
            </div>
            <div>
              <label for="gender"> Gender:</label>
              <Input
                style={{ width: 180 }}
                type="text"
                name="gender"
                placeholder="Enter string"
                required
              ></Input>
            </div>
            <div>
              <label for="address"> Address:</label>
              <Input
                style={{ width: 180 }}
                type="text"
                name="address"
                placeholder="Enter string"
                required
              ></Input>
            </div>
            <div>
              <label for="mobile"> Phone No:</label>
              <Input
                style={{ width: 180 }}
                type="text"
                name="mobile"
                placeholder="Enter string"
                required
              ></Input>
            </div>
            <div>
              <label for="joinedon"> Joined on:</label>
              <Input
                style={{ width: 180 }}
                type="text"
                name="joinedon"
                placeholder="Enter string"
                required
              ></Input>
            </div>
            <div>
              <label for="role"> Role:</label>
              <Input
                style={{ width: 180 }}
                type="text"
                name="role"
                placeholder="Enter string"
                required
              ></Input>
            </div>
            <div>
              <label for="department"> Department:</label>
              <Input
                style={{ width: 180 }}
                type="text"
                name="department"
                placeholder="Enter string"
                required
              ></Input>
            </div>
            <div>
              <Button
                shape="round "
                style={{ marginTop: "10px" }}
                type="submit"
              >
                Register
              </Button>
            </div>
          </form>
          <div>
            Already a user?
            <a href="/">
              <Button shape="round " style={{ marginLeft: "10px" }}>
                Login
              </Button>
            </a>
          </div>
        </div>
        )
    }
}
export default StaffSignUp;

        