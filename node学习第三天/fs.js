const fs=require('fs');
fs.readFile('aaa.txt',function(err,data){
	if(err){
      console.log(err);
	}else{
		console.log(data.toString())
	}
   
})
fs.writeFile('aaa.txt','往aaa里写内容',function(err){
    if(err){
    	console.log(err);
    }    
})