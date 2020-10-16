import { Form, Input, Button } from "antd";
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import axios from 'axios';
import styled from 'styled-components';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
};
  
const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 8,
      align: "center"
    },
};

const WelcomeText = styled.h2`
  text-align: center;
`;

const LegendText = styled.legend`
  text-align: center;
`;

const NoAccount = styled.h6`
text-align: center
`;

//   const Demo = () => {
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
// }

class PatientSignUp extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            username: '',
            password: '',
            dob: '',
            age: '',
            gender: '',
            address: '',
            mobile: '',
            blood: '',
            weight: '',
            insuranceno: '',
            emergencyname: '',
            emergencynumber: '',
            allergy: '',
            patienthistory: '',
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:5000/signup/patients', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        const { name, username, password, dob, age, gender, address, mobile, blood, weight, insurance, emergencyname, emergencynumber, allergy, patienthistory } = this.state
        return(
            <div>
                <br />
                <WelcomeText> Patient Sign Up </WelcomeText>
                <LegendText>Enter Your Details</LegendText>
                <br />
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >    
                    <form onSubmit={this.submitHandler} action="/signup/patients" method="POST">
                        <div>
                            <Form.Item
                            label="Name"
                            name="name"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your name',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="name"
                                    value={name}
                                    placeholder="Enter your name"
                                    onChange={this.changeHandler}
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Username"
                            name="username"
                            type="email"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your email',
                            },
                            ]}>
                                <Input
                                    type="email"
                                    name="username"
                                    value={username}
                                    placeholder="Enter your email"
                                    onChange={this.changeHandler}
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Password"
                            name="password"
                            type="password"
                            rules={[
                            {
                                required: true,
                                message: 'Enter valid password',
                            },
                            ]}>
                                <Input.Password
                                    type="password"
                                    name="password"
                                    value={password}
                                    minlength="8"
                                    placeholder="Should be atleast 8 characters"
                                    onChange={this.changeHandler}
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Date of Birth"
                            name="dob"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter in DD.MM.YYY format',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="dob"
                                    value={dob}
                                    placeholder="Enter in DD.MM.YYY format"
                                    onChange={this.changeHandler}
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Age"
                            name="age"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your age',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="age"
                                    value={age}
                                    placeholder="Enter your age"
                                    onChange={this.changeHandler}
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Gender"
                            name="gender"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your gender',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="gender"
                                    value={gender}
                                    placeholder="Enter your gender"
                                    onChange={this.changeHandler}
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Address"
                            name="address"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your address',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="address"
                                    value={address}
                                    placeholder="Enter your address"
                                    onChange={this.changeHandler}
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Phone No."
                            name="mobile"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your phone number',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="mobile"
                                    value={mobile}
                                    placeholder="Enter your phone number"
                                    onChange={this.changeHandler}
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Blood Group"
                            name="blood"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your blood group.',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="blood"
                                    value={blood}
                                    placeholder="Enter your blood group."
                                    onChange={this.changeHandler}
                                    required
                                />
                            </Form.Item>
                        </div>
                        {/* <div>
                            <Form.Item
                            label="Mobile No."
                            name="mobile"
                            type="text"
                            rules={[
                            {
                                required: false,
                                message: 'Enter your mobile number.',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="mobile"
                                    placeholder="Enter your mobile number."
                                    required
                                />
                            </Form.Item>
                        </div> */}
                        <div>
                            <Form.Item
                            label="Weight"
                            name="weight"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your weight.',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="weight"
                                    value={weight}
                                    placeholder="Enter your weight."
                                    onChange={this.changeHandler}
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Insurance Number"
                            name="insurance"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your insurance number.',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="insurance"
                                    value={insurance}
                                    placeholder="Enter your insurance number."
                                    onChange={this.changeHandler}
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Emergency Contact Name"
                            name="emergencyname"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your emergency contact name.',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="emergencyname"
                                    value={emergencyname}
                                    placeholder="Enter your emergency contact name."
                                    onChange={this.changeHandler}
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Emergency Contact Number"
                            name="emergencynumber"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your emergency contact number.',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="emergencynumber"
                                    value={emergencynumber}
                                    placeholder="Enter your emergency contact number."
                                    onChange={this.changeHandler}
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Allergies"
                            name="allergy"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your allergies, separated by commas.',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="allergy"
                                    value={allergy}
                                    placeholder="Enter your allergies, separated by commas."
                                    onChange={this.changeHandler}
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Medical History"
                            name="patienthistory"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your medical history, separated by commas.',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="patienthistory"
                                    value={patienthistory}
                                    placeholder="Enter your medical history, separated by commas."
                                    onChange={this.changeHandler}
                                    required
                                />
                            </Form.Item>
                        </div>
                <div>
                <Form.Item {...tailLayout}>
                        <Button href='/Patient' type="primary" m-2 htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </div>
            </form>
            <div>
               <NoAccount> Already a user? </NoAccount>

                <Form.Item {...tailLayout}>
                        <Button href='/' type="primary" m-2 htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
            </div>
            </Form>
            </div>
        )
    }
}
export default PatientSignUp;

        