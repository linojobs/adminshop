import { useId } from 'react';
import {addNode} from '../backend/IframeBackend';

export const useNode = (data:INestData):string => {
    const id = useId();
    addNode(id,{id,...data});
    return id;
};