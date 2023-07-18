import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { save } from '../reducers/nodes';

const useSaveNode = () => {
   
    const dispatch = useDispatch();

    return useCallback((node:INode)=>{
        dispatch(save(node));
    },[]);

};

export default useSaveNode;