const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 使用 body-parser 中间件解析请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 存储回调数据的数组
let callbackData = [];

// 定义回调路由
app.post('/callback', (req, res) => {
    console.log('收到回调:', req.body);
    callbackData.push(req.body);
    res.status(200).send('回调成功');
});

// 定义一个路由来查看回调数据
app.get('/callback-data', (req, res) => {
    res.json(callbackData);
});

// 启动服务器
const port = 3000;
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});