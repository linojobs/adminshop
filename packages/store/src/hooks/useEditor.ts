import { useDispatch, useSelector } from 'react-redux';
import { setToNodeId,setOverNodeId,setSelectNodeId } from '../reducers/editor';
import type {RootState} from '../reducers';

const useEditor = () => {
   
    const state = useSelector<RootState,IEditorState>(state=>state.editor);
    const dispatch = useDispatch();

    return {
        getToNodeId(){
            return state.toNodeId;
        },
        setToNodeId(id:string){
            dispatch(setToNodeId(id));
        },
        getOverNodeId(){
            return state.overNodeId;
        },
        setOverNodeId(id:string){
            dispatch(setOverNodeId(id));
        },
        getSelectNodeId(){
            return state.selectNodeId;
        },
        setSelectNodeId(id:string){
            dispatch(setSelectNodeId(id));
        }
    };

};

export default useEditor;