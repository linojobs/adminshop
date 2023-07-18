import React from 'react';
import TableSetting from './table';

const SettingBridge:React.FC<INode> = ({tag,props}) => {
    switch(tag){
    case 'table':
        return <TableSetting {...props} />;
    case 'card':
        return <>Card</>;
    case 'button':
        return <>Button</>;       
    }
    return <></>;
};

export default SettingBridge;