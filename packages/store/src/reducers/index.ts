import {combineReducers} from '@reduxjs/toolkit';
import system from './system';
import nodes from './nodes';
import editor from './editor';

const rootReducer = combineReducers({
    system:system.reducer,
    nodes:nodes.reducer,
    editor:editor.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;