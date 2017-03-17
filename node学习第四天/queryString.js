var http=require('http');
var queryString=require('querystring');
var server=http.createServer(function(req,res){
	    var get={};
	    if(req.url.indexOf('?')!=-1){
	    	// => 'http://localhost:8081/?user=user&password=123456'
	    var arr=req.url.split('?');
	    // arr => ['http://localhost:8081/','user=user&password=123456']
	    get=queryString.parse(arr[1]);   //直接进行切割查询字符串
    }else{
        var url=res.url;
    }
    
    console.log(get);
    res.write('你好');
    res.end();
})
server.listen(8081);  