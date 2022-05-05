import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
export default class welcome extends Component {
 onFinish = (value: any) =>{
  console.log(value)
 }
 render() {
  const fields = [
   {
    id:1,
    name:'111'
   },
   {
    id:2,
    name:'222'
   },
   {
    id:1,
    name:'333'
   }
  ];
  
  return (
   <div>
    <div>欢迎{'admin'}</div>
   <div>
   <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={this.onFinish}
    >
     {
      fields.map((item,index) => (
       <Form.Item
        label={item.name}
        name={item.name}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      ))
     }
      {/* <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
       */}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form></div>
   </div>
  )
 }
}
