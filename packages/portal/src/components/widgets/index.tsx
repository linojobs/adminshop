import { Drag } from '@adminshop/dnd';
import React from 'react';

const Widgets:React.FC<{data:IWidget[]}> = ({data}) => {
    return (
        <div className='widgets'>
            {
                data.map((widget,key)=>(
                    <Drag key={key} data={widget}>
                        <div className='widget'>{widget.title}</div>
                    </Drag>
                ))
            }
        </div>
    );
};

export default Widgets;