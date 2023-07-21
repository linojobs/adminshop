import React,{ forwardRef } from 'react';
import { Form, FormProps } from "antd";

const FormWrapper = forwardRef<HTMLDivElement,FormProps & {children?:React.ReactNode}>(({children,...props},ref)=>{
   return (
    <div ref={ref}>
        <Form {...props}>{children}</Form>
    </div>
   )
});

export default FormWrapper;