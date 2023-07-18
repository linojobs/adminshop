const nodes = new Map<string,INode>();

export function addNode(id:string,node:INode){
    nodes.set(id,node);
}

export function removeNode(id:string){
    if(nodes.has(id))nodes.delete(id);
}

export function getNode(id:string):INode|undefined{
    return nodes.get(id);
}

function createDragHandler(doc:Document,title:string = ''){
    const span = doc.createElement('span');
    span.classList.add('drag-handler');
    span.innerText = title;
    doc.body.appendChild(span);
    return {
        move(x:number,y:number){
            span.style.top = `${y}px`;
            span.style.left = `${x}px`;
        },
        destroy(){
            doc.body.removeChild(span);
        }
    };
}

function isOverIframe(elements:HTMLElement[]):boolean{
    return elements.some(ele=>ele.dataset.role === 'dnd-iframe');
}

function getIframe(elements:HTMLElement[]):HTMLIFrameElement|undefined{
    return elements.find(ele=>ele.dataset.role === 'dnd-iframe') as HTMLIFrameElement;
}

function findOverElement(elements:HTMLElement[]){
    for(let i=0;i<elements.length;i+=1){
        const dataset = elements[i].dataset;
        if(dataset.dropable !== undefined && dataset.dndId !== undefined){
            return {
                id:dataset.dndId,
                dropable:dataset.dropable === 'true'
            };
        }
    }
    return {
        id:'root',
        dropable:true
    };
}

function findDropElement(elements:HTMLElement[]){
    for(let i=0;i<elements.length;i+=1){
        const dataset = elements[i].dataset;
        if(dataset.dropable === 'true' && dataset.dndId !== undefined){
            return {
                id: dataset.dndId,
                dropable: true
            };
        }
    }
    return {
        id:'root',
        dropable:true
    };
}

function findInnerElements(doc:Document,x:number,y:number){
    const elements = doc.elementsFromPoint(x,y) as HTMLElement[];
    if(!isOverIframe(elements))return undefined;
    const iframe = getIframe(elements);
    if(!iframe)return undefined;
    const rect = iframe.getBoundingClientRect();
    const dx = x - rect.left;
    const dy = y - rect.top;
    return iframe.contentDocument?.elementsFromPoint(dx,dy) as HTMLElement[];
}

function getOverNode(doc:Document,x:number,y:number){
    const innerElements = findInnerElements(doc,x,y);
    if(innerElements === undefined)return undefined;
    return findOverElement(innerElements);
}

function getDropNode(doc:Document,x:number,y:number){
    const innerElements = findInnerElements(doc,x,y);
    if(innerElements === undefined)return undefined;
    return findDropElement(innerElements);
}

function findDnDId(element:HTMLElement|null):string|undefined{
    if(element === null)return '';
    if(element.tagName === 'BODY')return '';
    const dataset = element.dataset;
    if(!dataset)return '';
    if(!('dndId' in dataset)){
        return findDnDId(element.parentElement);
    }
    return dataset.dndId;
}

function mousedown(e:MouseEvent){
    const target = e.target as HTMLElement;
    const host = e.view;
    if(!('dragId' in target.dataset) || !host)return;
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    const doc = host?.document;
    const dragId = target.dataset.dragId as string;
    const node = getNode(dragId);
    const handler = createDragHandler(doc,node?.title);

    // dragstart
    host?.postMessage({
        eventType:'dragstart',
        node,
        dragX:x,
        dragY:y,
        draging:true,
        overIframe:false
    });

    function _move(e:MouseEvent){
        const x = e.clientX;
        const y = e.clientY;
        const overNode = getOverNode(doc,x,y);
        host?.postMessage({
            eventType:'drag',
            node,
            toNodeId:(overNode === undefined ? undefined : overNode.id),
            dropable:(overNode === undefined ? false : overNode.dropable),
            dragX:x,
            dragY:y,
            draging:true,
        });
        handler.move(e.clientX,e.clientY);
    }

    function _up(e:MouseEvent){
        const x = e.clientX;
        const y = e.clientY;

        handler.destroy();
        doc.removeEventListener('mousemove',_move);
        doc.removeEventListener('mouseup',_up);

        const overNode = getDropNode(doc,x,y);
        if(overNode === undefined)return;
        if(overNode.dropable === false)return;
        host?.postMessage({
            eventType:'dragend',
            node:node,
            toNodeId:overNode.id,
            dropable:true,
            dragX:x,
            dragY:y,
            draging:false
        });
    }

    doc.addEventListener('mousemove',_move);
    doc.addEventListener('mouseup',_up);
}

function iframeMouseEvent(e:MouseEvent){
    const type = e.type;
    const target = e.target as HTMLElement;
    const host = e.view;
    const x = e.clientX;
    const y = e.clientY;
    if(!host)return;
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
    const nodeId = findDnDId(target);
    host.parent.postMessage({
        eventType:`iframe_${type}`,
        overNodeId:nodeId,
        dragX:x,
        dragY:y
    });
}

export function attachDragEvent(window:Window){
    window.document.removeEventListener('mousedown',mousedown);
    window.document.addEventListener('mousedown',mousedown);
}

export function attachIframeEvent(iframeWindow:Window){
    iframeWindow.document.removeEventListener('mouseover',iframeMouseEvent);
    iframeWindow.document.removeEventListener('mouseleave',iframeMouseEvent);
    iframeWindow.document.removeEventListener('mousedown',iframeMouseEvent);
    iframeWindow.document.addEventListener('mouseover',iframeMouseEvent);
    iframeWindow.document.addEventListener('mouseleave',iframeMouseEvent);
    iframeWindow.document.addEventListener('mousedown',iframeMouseEvent);
}