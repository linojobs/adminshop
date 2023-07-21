import React,{ forwardRef } from 'react';
import { Form, FormItemProps, Input } from "antd";

const InputWrapper = forwardRef<HTMLDivElement,FormItemProps>((props,ref)=>{
   return (
    <Form.Item {...props}>
        <Input />
    </Form.Item>
   )
});

export default InputWrapper;