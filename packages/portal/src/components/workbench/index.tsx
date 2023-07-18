import React from 'react';
import Canvas from '../canvas';
import Widgets from '../widgets';
import widgets from '@adminshop/bridge/widgets';
import Setting from '../setting';

const WorkBench:React.FC = () => {
    return (
        <div className='workbench'>
            <div className='workbench-header'></div>
            <div className='workbench-menu'></div>
            <div className='workbench-left'>
                <Widgets data={widgets} />
            </div>
            <div className='workbench-body'>
                <Canvas />
            </div>
            <div className='workbench-right'>
                <Setting />
            </div>
            <div className='workbench-footer'></div>
        </div>
    );
};

export default WorkBench;