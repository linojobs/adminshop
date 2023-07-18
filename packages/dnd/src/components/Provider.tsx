import React, { useCallback, useEffect, useState } from 'react';

const initialState:IDNDState = {
    eventType:'idel',
    draging:false,
    toNodeId:'',
    overNodeId:'',
    dragX:0,
    dragY:0,
    overIframe:false
};

export const Context = React.createContext<IDNDState>(initialState);

const Provider:React.FC<IReactNodeWraper> = ({children}) => {
    const [value,setValue] = useState<IDNDState>({...initialState});

    const handleMessage = useCallback((e:MessageEvent)=>{
        const data = e.data;
        if(e.origin !== location.origin)return;
        setValue(data);
    },[]);

    useEffect(()=>{
        window.addEventListener('message',handleMessage);
        return ()=>window.removeEventListener('message',handleMessage);
    },[]);

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export default Provider;