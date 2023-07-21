import { SettingBridge } from '@adminshop/bridge';
import { Card } from '@adminshop/components';
import { useEditor, useNodes,useSaveNodeProps } from '@adminshop/store';
import React, { useCallback, useMemo } from 'react';

const Setting:React.FC = () => {

    const nodes = useNodes();
    const editor = useEditor();
    const saveNodeProps = useSaveNodeProps();
    const selectNodeId = editor.getSelectNodeId();

    const node = useMemo(()=>{
        if(Object.prototype.hasOwnProperty.call(nodes,selectNodeId)){
            return nodes[selectNodeId];
        }
        return nodes[0];
    },[nodes,selectNodeId]);

    const handleSave = useCallback((props:INode['props'])=>{
        saveNodeProps(node.id,props);
    },[node]);

    if(!node)return <></>;

    return (
        <div className='setting'>
            <Card size='small' bordered={false} title={`${node.tag}#${node.id}`}>
                <SettingBridge onSave={handleSave} node={node} />
            </Card>
        </div>
    );
};

export default Setting;