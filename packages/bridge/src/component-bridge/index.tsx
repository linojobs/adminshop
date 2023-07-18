import React,{useCallback} from 'react';
import cn from 'classnames';
import { Button, Card, Table } from '@adminshop/components';

const ComponentBridge:React.FC<IComponentBrige> = ({id,tag,children,dropable,mask,props,selected}) => {

    const handleRef = useCallback((ref:HTMLDivElement)=>{
        if(!ref)return;
        ref.dataset.dndId = id;
        ref.dataset.dropable = dropable === true ? 'true' : 'false';
    },[id]);

    const classes = cn({
        margin:true,
        mask:mask,
        selected:selected
    });

    // If the component's dropable is true,it can accept another component.
    switch(tag){
    case 'button':
        return <Button className={classes} ref={handleRef} {...props}>{props.title}</Button>;    
    case 'table':
        return <Table className={classes} ref={handleRef} {...props} />;
    case 'card':
        return <Card className={classes} ref={handleRef} {...props}>{children}</Card>;  
    }
    return <></>;
};

export default ComponentBridge;