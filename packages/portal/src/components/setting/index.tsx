import { SettingBridge } from '@adminshop/bridge';
import { useEditor, useNodes } from '@adminshop/store';
import React, { useMemo } from 'react';

const Setting:React.FC = () => {

    const nodes = useNodes();
    const editor = useEditor();

    const node = useMemo(()=>{
        const selectNodeId = editor.getSelectNodeId();
        if(Object.prototype.hasOwnProperty.call(nodes,selectNodeId)){
            return nodes[selectNodeId];
        }
        return nodes[0];
    },[nodes,editor]);

    return (
        <div className='setting'>
            <SettingBridge {...node} />
        </div>
    );
};

export default Setting;