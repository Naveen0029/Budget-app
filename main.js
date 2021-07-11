var express=require('express');
var app=express();
var path= require('path');
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/index.html');
});

var server=app.listen(process.env.PORT||5000,function(){
    console.log('server is running');
})

module.exports=app;