const widgets:IWidget[] = [
    {
        tag:'page',
        dropable:true,
        title:'Page 模版页',
        template:`<card><table /><table /><button /></card>`,
        props:{}
    },
    {
        tag:'card',
        dropable:true,
        title:'Card 卡片',
        props:{
            title:'Card'
        }
    },
    {
        tag:'table',
        dropable:false,
        title:'Table 表格',
        props:{
            columns:[
                {title:'Column1'},
                {title:'Column2'}
            ]
        }
    },
    {
        tag:'button',
        dropable:false,
        title:'Button 按钮',
        props:{
            title:'Button'
        }
    }
];

export default widgets;