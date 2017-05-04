demo来自http://reactjs.cn/react/docs/getting-started-zh-CN.html

先安装Babel命令行工具

npm install --global babel-cli
npm install babel-preset-react

将helloWord.js文件转换成标准的javascript：
babel --presets react modules --watch --out-dir build