/**
 * Created by joshinrai on 2017/5/12.
 */
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let index = require('./routes/index');

let app = express();

//设置视图引擎路径
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// 捕获404异常并重定向到error处理函数
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// 错误处理
app.use((err, req, res, next) => {
    // 设置本地环境，只在开发环境中提供错误处理方法
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // 渲染错误页
    res.status(err.status || 500);
    res.render('error');
});

console.log("app.js is used ...") ;

module.exports = app;