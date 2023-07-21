import React,{useCallback} from 'react';
import {Form,Input, Switch} from 'antd';

const FormSetting:React.FC<ISetting> = ({onSave,props}) => {

    const handleInput = useCallback((name:string)=>{
        return (e:React.ChangeEvent<HTMLInputElement>) => {
            onSave({
                ...props,
                [name]:e.target.value
            });
        };
    },[onSave,props]);

    const handleSwitch = useCallback((name:string)=>{
        return (v:boolean) => {
            onSave({
                ...props,
                [name]:v
            });
        };
    },[onSave,props]);

    return (
        <Form layout='horizontal'>
            <Form.Item label='Title'>
                <Input size='small' onChange={handleInput('title')} value={props.title} />
            </Form.Item>
            <Form.Item label='Border'>
                <Switch checked={props.bordered} onChange={handleSwitch('bordered')} />
            </Form.Item>
        </Form>
    );
};

export default FormSetting;