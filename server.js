var express=require("express");
var app=express();
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var Contact=require("./models/clientsignup");
var PORT=process.env.PORT || 3000;
var path = require('path');

mongoose.connect("mongodb://localhost/contactlist",function(){
	console.log("successfully connected to mogodb");
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.listen(PORT,function(){
	console.log("Server is running in number "+PORT);
});
