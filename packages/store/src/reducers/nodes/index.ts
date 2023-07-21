import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const nodes = createSlice({
    name:'nodes',
    initialState:{
        nodes:{},
        relations:{
            root:[]
        }
    },
    reducers:{
        create(state,action:PayloadAction<ICreateNodePayload>){
            const {payload} = action;
            state.nodes[payload.id] = payload.node;
            state.relations[payload.id] = [];
        },
        add(state,action:PayloadAction<IAddNodePayload>){
            const {payload} = action;
            state.relations[payload.toId].push(payload.fromId);
        },
        remove(state,action:PayloadAction<INode>){
            const {payload} = action;
            delete state.nodes[payload.id];
            delete state.relations[payload.id];
        },
        saveProps(state,action:PayloadAction<{id:string,props:INode['props']}>){
            const {payload} = action;
            state.nodes[payload.id].props = payload.props;
        }
    }
});

export const {create,add,remove,saveProps} = nodes.actions;

export default nodes;