import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Form, Input, Button, Checkbox } from 'antd';
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

const WelcomeText = styled.h1`
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

class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:5000/login', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        const { username, password } = this.state
        return(
            <div className>
                <br /> <br />
                <WelcomeText> Welcome! </WelcomeText>
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
                    <form onSubmit={this.submitHandler} action="localhost:5000/signup/staff" method="POST">
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
                        <Input
                            name="username"
                            value={username}
                            placeholder="Enter your email."
                            onChange={this.changeHandler} 
                        />
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
                        <Input.Password 
                            name="password"
                            value={password}
                            placeholder="Enter an 8-digit password."
                            onChange={this.changeHandler}
                        />
                    </Form.Item>
                    </form>

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

                <NoAccount> Don't have an account? </NoAccount>
                <br />
                <Form>
                    <Form.Item {...tailLayout}>
                        <Button href='/signup/patient' type="primary" m-2 htmlType="submit">
                            Patient SignUp
                        </Button> {' '}
                        <Button href='/signup/staff' type="primary" m-2 htmlType="submit">
                            Staff SignUp
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        )
    }
}
export default Home;