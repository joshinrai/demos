/**
 * Created by joshinrai on 2017/5/12.
 */
let app = require('./app') ;
let gulp = require('gulp') ;
let http = require('http') ;

//gulp默认任务
gulp.task('default' , ()=>{
    console.log("*****欢迎访问我的主页:www.joshinrai.com*****") ;
    console.log("**********启动项目命令:gulp start**********") ;
    console.log("**********本地访问:localhost:3000*********") ;
}) ;

//启动项目
gulp.task('start' , ()=>{
    console.log("homepage is starting ...") ;
    app.set('port', 3000);
    let server = http.createServer(app);
    server.listen(3000);
    console.log("homepage is started.") ;
    console.log("welcome to joshinrai's homepage ...") ;
}) ;

gulp.task('clean' , ()=>{
    console.log("clean") ;
}) ;