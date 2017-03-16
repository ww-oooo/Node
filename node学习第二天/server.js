var http=require('http');  //引用模块
var server=http.createServer(function(req,res){   //创建服务器
       // console.log('创建第一个服务器');
       // console.log(req);
       switch(req.url){
       	  case '/1.html':
       	    res.write('给你数据11111');
       	    break;
       	  case '/2.html':
       	    res.write('给你数据22222');
       	    break;
       	   default:
       	   res.write('404');
       	   break;
       }
       res.end();
})
server.listen(8080); //监听数据
// 笔记
// require    浏览器请求信息
// response  服务器响应信息
// favicon.ico   网站图标

