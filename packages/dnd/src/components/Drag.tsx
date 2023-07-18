import React from 'react';
import { useNode } from '../hooks/useNode';

const Drag:React.FC<IDragNodeWraper> = ({children,data}) => {
    const id = useNode(data);
    children.props.id = id;
    children.props['data-drag-id'] = id;
    return <>{children}</>;
};

export default Drag;