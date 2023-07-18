import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { create } from '../reducers/nodes';

const useCreateNode = () => {
   
    const dispatch = useDispatch();

    return useCallback((node:ICreateNodePayload)=>{
        dispatch(create(node));
    },[]);

};

export default useCreateNode;