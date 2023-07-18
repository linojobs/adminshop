import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const editor = createSlice({
    name:'editor',
    initialState:{
        toNodeId:'',
        overNodeId:'',
        selectNodeId:'',
    },
    reducers:{
        setToNodeId(state,action:PayloadAction<string>){
            const {payload} = action;
            state.toNodeId = payload;
        },
        setOverNodeId(state,action:PayloadAction<string>){
            const {payload} = action;
            state.overNodeId = payload;
        },
        setSelectNodeId(state,action:PayloadAction<string>){
            const {payload} = action;
            state.selectNodeId = payload;
        }
    }
});

export const {setToNodeId,setOverNodeId,setSelectNodeId} = editor.actions;

export default editor;