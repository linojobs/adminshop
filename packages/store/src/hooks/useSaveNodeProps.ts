import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { saveProps } from '../reducers/nodes';

const useSaveNodeProps = () => {
   
    const dispatch = useDispatch();

    return useCallback((id:string,props:INode['props'])=>{
        dispatch(saveProps({id,props}));
    },[]);

};

export default useSaveNodeProps;