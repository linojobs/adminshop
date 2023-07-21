import React from 'react';
import TableSetting from './table';
import CardSetting from './card';
import FormSetting from './form';
import InputSetting from './input';

const SettingBridge:React.FC<ISettingBridge> = ({onSave,node}) => {
    switch(node.tag){
    case 'table':
        return <TableSetting onSave={onSave} props={node.props} />;
    case 'card':
        return <CardSetting onSave={onSave} props={node.props} />;
    case 'button':
        return <>Button</>;
    case 'form':
        return <FormSetting onSave={onSave} props={node.props} />;
    case 'input':
        return <InputSetting onSave={onSave} props={node.props} />;         
    }
    return <></>;
};

export default SettingBridge;