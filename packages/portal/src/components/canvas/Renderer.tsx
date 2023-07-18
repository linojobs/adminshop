import React from 'react';
import { ComponentBridge } from '@adminshop/bridge';
import { Drop } from '@adminshop/dnd';

interface RenderProps{
    root:string;
    relations:INodesState['relations'];
    nodes:INodesState['nodes'];
    toNodeId:string;
    overNodeId:string;
    selectNodeId:string;
}

const Renderer:React.FC<RenderProps> = ({root,relations,nodes,toNodeId,overNodeId,selectNodeId}) => {

    if(!relations[root])return <></>;
    return (
        <>
            {
                relations[root].map((nodeId,key)=>(
                    <Drop key={key} id={nodeId}>
                        <ComponentBridge
                            selected={selectNodeId === nodeId} 
                            mask={overNodeId === nodeId} 
                            {...nodes[nodeId]}
                        >
                            <>
                                <Renderer 
                                    root={nodeId} 
                                    nodes={nodes} 
                                    relations={relations} 
                                    toNodeId={toNodeId}
                                    overNodeId={overNodeId}
                                    selectNodeId={selectNodeId}
                                />
                                <DropLine nodeId={nodeId} toNodeId={toNodeId} />
                            </>
                        </ComponentBridge>
                    </Drop>
                )) 
            }
        </>
    );
};

const DropLine:React.FC<{toNodeId:string,nodeId:string}> = ({toNodeId,nodeId}) => {
    if(toNodeId !== nodeId)return<></>;
    return (
        <hr className='drop-line' />
    );
};

export default Renderer;