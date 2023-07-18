import React, { useEffect,useCallback } from 'react';
import { useDND } from '@adminshop/dnd';
import { useAddNode,useCreateNode, useEditor } from '@adminshop/store';

let uuid = 1;

const DNDBridge:React.FC = () => {
    const dnd = useDND();
    const add = useAddNode();
    const create = useCreateNode();
    const editor = useEditor();

    const dragend = useCallback((dnd)=>{
        if(dnd.eventType !== 'dragend')return;
        const id = `${uuid}`;
        editor.setToNodeId('');
        create({id,node:dnd.node});
        add({
            fromId:id,
            toId:dnd.toNodeId
        });
        uuid = uuid + 1;

    },[add,create,editor]);

    const draging = useCallback((dnd)=>{
        if(dnd.eventType !== 'drag')return;
        editor.setToNodeId(dnd.toNodeId);
    },[editor]);

    const iframeMouseover = useCallback((dnd)=>{
        if(dnd.eventType !== 'iframe_mouseover')return;
        editor.setOverNodeId(dnd.overNodeId);
    },[editor]);

    const iframeMousedown = useCallback((dnd)=>{
        if(dnd.eventType !== 'iframe_mousedown')return;
        editor.setSelectNodeId(dnd.overNodeId);
    },[editor]);


    useEffect(()=>{
        draging(dnd);
        dragend(dnd);
        iframeMouseover(dnd);
        iframeMousedown(dnd);
    },[dnd]);

    return (
        <></>
    );
};

export default DNDBridge;