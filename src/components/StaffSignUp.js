import { Form, Input, Button, Select } from "antd";
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';

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
    },
};
  
//   const Demo = () => {
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
// }

class StaffSignUp extends Component{
    // constructor(props){
    //     super(props);
    // }
    
    render(){

        return(
            <div>
                <h2> Staff Sign Up </h2>
                <legend>Enter Your Details</legend>
                <br /><br />
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >    
                    <form action="/signup/staff" method="POST">
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
                                    placeholder="Enter your name"
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
                                    placeholder="Enter your email"
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
                                    minlength="8"
                                    placeholder="Should be atleast 8 characters"
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
                                    placeholder="Enter in DD.MM.YYY format"
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
                                    placeholder="Enter your age"
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
                                    placeholder="Enter your gender"
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
                                    placeholder="Enter your address"
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
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Joined On"
                            name="joinedon"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your joining date.',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="joinedon"
                                    placeholder="Enter your joining date."
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Role"
                            name="role"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your role.',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="role"
                                    placeholder="Enter your role."
                                    required
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                            label="Department"
                            name="department"
                            type="text"
                            rules={[
                            {
                                required: true,
                                message: 'Enter your department.',
                            },
                            ]}>
                                <Input
                                    type="text"
                                    name="department"
                                    placeholder="Enter your department."
                                    required
                                />
                            </Form.Item>
                        </div>
                <div>
                <Form.Item {...tailLayout}>
                        <Button href='/Staff' type="primary" m-2 htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </div>
            </form>
            <div>
               <h6> Already a user? </h6>

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
export default StaffSignUp;

        