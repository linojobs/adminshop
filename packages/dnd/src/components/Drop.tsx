import React from 'react';

const Drop:React.FC<IReactNodeWraper & {id:string}> = ({children,id}) => {
    children.props.id = id;
    children.props['data-drop-id'] = id;
    return <>{children}</>;
};

export default Drop;