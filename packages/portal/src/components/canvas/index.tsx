import React from 'react';
import {Canvas as DNDCanvas } from '@adminshop/dnd';
import { useEditor, useNodes, useRelations, useRoot } from '@adminshop/store';
import Renderer from './Renderer';

const Canvas:React.FC = () => {
    const root = useRoot();
    const nodes = useNodes();
    const relations = useRelations();
    const editor = useEditor();

    const toNodeId = editor.getToNodeId();
    const overNodeId = editor.getOverNodeId();
    const selectNodeId = editor.getSelectNodeId();

    return (
        <DNDCanvas src='./renderer.html'>
            <>
                <Renderer 
                    root={root}
                    nodes={nodes}
                    relations={relations}
                    toNodeId={toNodeId}
                    overNodeId={overNodeId}
                    selectNodeId={selectNodeId}
                />
                <div className='overflow-placeholder'></div>
            </>
        </DNDCanvas>
    );

};

export default Canvas;