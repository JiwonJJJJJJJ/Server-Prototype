const express =require('express')
const app=express()
const port=3000
const path=require('path')
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/log.text',function(req,res){
	res.sendFile((__dirname+"/log.text"));
});
app.listen(port,()=>console.log(`Port open`));
