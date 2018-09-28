import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

export default class Login extends React.Component{
    handleSubmit = (e) => {
        console.log(123);
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    </FormItem>
                </Form>
            </div>
        )
    }
}