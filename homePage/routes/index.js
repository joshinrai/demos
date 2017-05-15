/**
 * Created by joshinrai on 2017/5/12.
 */
let express = require('express');
let router = express.Router();
let react = require('react') ;
let reactDom = require('react-dom') ;

//let React = require('react/addons');


//测试
/*let ReactApp = React.createClass({
    render : function(){
        return (
            <div id='test'/>
        )
    }
});*/
/*reactDom.render(
    <h1>Hello, world!</h1>,
    document.getElementById('test')
);*/

/* 获取主页(index页面) */
router.get('/', (req, res, next) =>{
    res.render('index', { head: '我的主页' , test : '我的测试'});
    console.log("调用初始界面...") ;
});

/**路由测试,貌似index中的路由不起作用**/
router.get('/test' , ( req , res , next)=>{
    res.render("this is router test ...") ;
}) ;

module.exports = router;
