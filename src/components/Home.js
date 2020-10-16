import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import Admin from './Admin'
import history from '../history';

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

class Home extends Component{

    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div>
                <br /> <br />
                <h1> Welcome! </h1>
                <br /> <br />
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button href='/Patient' type="primary" m-2 htmlType="submit">
                            Patient Login
                        </Button> {' '}
                        <Button href='/Staff' type="primary" m-2 htmlType="submit">
                            Staff Login
                        </Button> {' '}
                        <Button href='/Admin' type="primary" m-2 htmlType="submit">
                            Admin Login
                        </Button>
                    </Form.Item>
                </Form>
                <br /> <br />

                <h6> Don't have an account? </h6>
                <br />
                <Form>
                    <Form.Item {...tailLayout}>
                        <Button href='/PatientSignUp' type="primary" m-2 htmlType="submit">
                            Patient SignUp
                        </Button> {' '}
                        <Button href='/StaffSignUp' type="primary" m-2 htmlType="submit">
                            Staff SignUp
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        )
    }
}
export default Home;