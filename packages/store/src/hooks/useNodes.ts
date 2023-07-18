import { useSelector } from 'react-redux';
import type {RootState} from '../reducers';

const useNodes = () => {
    const nodes = useSelector<RootState,INodesState['nodes']>(state=>state.nodes.nodes);
    return nodes;
};

export default useNodes;