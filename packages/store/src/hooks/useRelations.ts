import { useSelector } from 'react-redux';
import type {RootState} from '../reducers';

const useRelations = () => {
    const relations = useSelector<RootState,INodesState['relations']>(state=>state.nodes.relations);
    return relations;
};

export default useRelations;