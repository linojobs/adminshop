import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../reducers/nodes';

const useAddNode = () => {
   
    const dispatch = useDispatch();

    return useCallback((node:IAddNodePayload)=>{
        dispatch(add(node));
    },[]);

};

export default useAddNode;