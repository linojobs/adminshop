const widgets:IWidget[] = [
    {
        tag:'page',
        dropable:true,
        title:'Page 模版页',
        props:{}
    },
    {
        tag:'card',
        dropable:true,
        title:'Card 卡片',
        props:{
            title:'Card',
            bordered:true
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
    },
    {
        tag:'form',
        dropable:true,
        title:'Form 表单',
        props:{
            layout:'horizontal'
        }
    },
    {
        tag:'input',
        dropable:false,
        title:'Input 文本输入框',
        props:{
            type:'text',
            label:'Name',
            name:'name'
        }
    },
    {
        tag:'input',
        dropable:false,
        title:'Password 密码输入框',
        props:{
            type:'password',
            label:'Password',
            name:'password'
        }
    }
];

export default widgets;