import React, { useCallback, useMemo } from 'react';
import { attachDragEvent,attachIframeEvent } from '../backend/IframeBackend';
import ReactDOM from 'react-dom';
import { useDND } from '../hooks/useDND';


const Canvas:React.FC<IDNDCanvas> = ({children,src}) => {

    const handleRef = useCallback((iframe:HTMLIFrameElement)=>{
        if(!iframe)return;
        const iframeWindow = iframe.contentWindow;
        const iframeDocument = iframe.contentDocument;
        if(!iframeWindow || !iframeDocument)return;
        const body = iframeDocument.body;
        attachDragEvent(window);
        attachIframeEvent(iframeWindow);
        ReactDOM.render(
            children,
            body
        );
    },[children]);

    const {draging} = useDND();
    const pointerEvents = useMemo(()=>(draging ? 'all' : 'none'),[draging]);

    return (
        <div style={{width:'100%',height:'100%',position:'relative'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,pointerEvents}}></div>
            <iframe src={src} data-role='dnd-iframe' ref={handleRef} width='100%' height='100%' />
        </div>
    );

};

export default Canvas;