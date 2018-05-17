var express = require("express"),
    app = express();
var path = require("path");
//指定模板文件存放位置
app.set("views", './view');
//设置模板引擎,使ejs能够识别后缀为’.html’的文件
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
//设置静态文件目录
app.use(express.static('./view'));
//设置路由  res对象发送res.render('模板文件名（无后缀）');
app.get("/", function (req, res) {
    res.render("index")
})
//设置服务器端口号
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
