var http=require('http');
var urlLib=require('url');
var server=http.createServer(function(req,res){
	var obj=urlLib.parse(req.url,true);
	var url=obj.pathname;
	var get=obj.query;
	console.log(url,get); 
    res.write('你好');
    res.end();
})
server.listen(8081);