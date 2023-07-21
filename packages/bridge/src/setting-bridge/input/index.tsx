import React,{useCallback} from 'react';
import {Form,Input, Switch} from 'antd';

const InputSetting:React.FC<ISetting> = ({onSave,props}) => {

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
            <Form.Item label='Name'>
                <Input size='small' onChange={handleInput('name')} value={props.name} />
            </Form.Item>
            <Form.Item label='Colon'>
                <Switch checked={props.colon} onChange={handleSwitch('colon')} />
            </Form.Item>
        </Form>
    );
};

export default InputSetting;