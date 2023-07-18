interface IReactNodeWraper{
    children:React.ReactElement;
}

type IComponentTag = 'table'|'card'|'page'|'button';

type INestData = Record<string,string|number|INestData>;

interface IDragNodeWraper{
    children:React.ReactElement;
    data:INestData;
}
 
 interface INode{
     id:string;
     tag:string;
     title:string;
     dropable:boolean;
     props?:INestData;
 }

 interface IComponentBrige extends INode,IReactNodeWraper{
     mask:boolean;
     selected:boolean;
 }
 
 interface IDragProps{
     onMove?:(current:INode,target:INode)=>void;
     onRelease?:(current:INode,target:INode)=>void;
 }
 
 interface IDropProps{
     onOver?:(current:INode,from:INode)=>void;
     onLeave?:(current:INode,from:INode)=>void;
     onDrop?:(current:INode,from:INode)=>void;
 }

 interface IDNDStateCommon{
    draging:boolean;
    dragX:number;
    dragY:number;
    overIframe:boolean;
    toNodeId:string;
    overNodeId:string;
 }

 interface IDNDIdelState extends IDNDStateCommon{
    eventType:'idel';
 }

 interface IDNDDragStartState extends IDNDStateCommon{
   eventType:'dragstart';
   node:INode;
 }

 interface IDNDDragState extends IDNDStateCommon{
   eventType:'drag';
   node:INode;
 }

 interface IDNDDragendState extends IDNDStateCommon{
    eventType:'dragend';
    node:INode;
 }

 type IDNDState = IDNDDragStartState | IDNDDragState | IDNDDragendState | IDNDIdelState;

 interface IDNDCanvas extends IReactNodeWraper{
    src:string;
 }

 interface IWidget{
    tag:IComponentTag;
    dropable:boolean;
    title:string;
    template?:string;
    props:INestData;
 }

 // nodes state
 interface INodesState{
    nodes:Record<string,INode>;
    relations:Record<string,string[]>;
 }

 interface ICreateNodePayload{
    id:string;
    node:INode;
 }

 interface IAddNodePayload{
    fromId:string;
    toId:string;
 }

 // editor state
 interface IEditorState{
    toNodeId:string;
    overNodeId:string;
    selectNodeId:string;
 }