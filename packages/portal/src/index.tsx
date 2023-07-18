import React from 'react';
import {createRoot} from 'react-dom/client';
import {DNDBridge} from '@adminshop/bridge';
import WorkBench from './components/workbench';

import '@adminshop/theme/index.css';
import { DNDProvider } from '@adminshop/dnd';
import { StoreProvider } from '@adminshop/store';

const rootContianer = document.createElement('div');
rootContianer.classList.add('adminshop');

const root = createRoot(rootContianer);
root.render(
    <StoreProvider>
        <DNDProvider>
            <>
                <WorkBench />
                <DNDBridge />
            </>
        </DNDProvider>
    </StoreProvider>
);

document.body.appendChild(rootContianer);