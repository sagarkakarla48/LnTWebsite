var express=require("express");
var app=express();
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var Contact=require("./models/clientsignup");
var client=require("./models/client");
var PORT=process.env.PORT || 3000;
var path = require('path');mongoose.connect("mongodb://localhost/lntwebsite",function(){
	console.log("successfully connected");
});


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.get("/clientlist/:id",function(req,res){
 	var id=req.params.id;
 	client.getClientdetails(id,function(err,data){
 		if(err){
 			throw err;

 		}
 		res.json(data);
 	})
 })

app.listen(PORT,function(){
	console.log("Server is running in number "+PORT);
});
