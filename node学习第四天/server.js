var http=require('http');
var server=http.createServer(function(req,res){
	    var get={};
	    if(req.url.indexOf('?')!=-1){
	    	// => 'http://localhost:8081/?user=user&password=123456'
	    var arr=req.url.split('?');
	    // arr => ['http://localhost:8081/','user=user&password=123456']
	    var arr1=arr[1].split('&');
	    // arr1 => ['user=user','password=123456']
	    for(var i=0;i<arr1.length;i++){
	         var arr3=arr1[i].split('=');
	          // arr3 => ['user','user']['password','123456']
	          get[arr3[0]]=arr3[1];

	    }
    }else{
        var url=res.url;
    }
    
    console.log(get);
    res.write('你好');
    res.end();
})
server.listen(8081);