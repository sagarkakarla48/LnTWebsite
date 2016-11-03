var express=require("express");
var app=express();
var mongoose=require("mongoose");
var bodyParser=require("body-parser");

var Feedback=require("./models/feedbackdetails");
var custom=require("./models/clientsignup");

var PORT=process.env.PORT || 3000;
var path = require('path');mongoose.connect("mongodb://localhost/lntwebsite",function(){
	console.log("successfully connected");
});


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get("/clientlist/:id",function(req,res){
 	var id=req.params.id;
 	console.log(id);
 	custom.getClientData(id,function(err,data){
 		if(err){
 			throw err;
 		}
 		console.log(data);
 		res.json(data);
 	})
 })

app.get("/clientdupcheck/:email",function(req,res){
 	var email=req.params.email;
 	console.log(email);
 	custom.checkClientEmail(email,function(err,data){
 		if(err){
 			throw err;
 		}
 		console.log(data);
 		res.json(data);
 	})
 })

app.post("/feedbackList",function(req,res){
	
var body=req.body;//will fetch body details

Feedback.addContact(body,function(err,data){
	if(err){
		throw err;
	}
		res.json(data);
})
})

app.get("/clientlogindetails/:email/:pwd",function(req,res){

var email=req.params.email;
var pwd=req.params.pwd;
custom.getClientDetails(email,pwd,function(err,data){
	if(err){
		throw err;
	}
	console.log(data);
		res.json(data);

})
})
app.post("/signup",function(req,res){
var body=req.body;//using body parser

custom.addDetails(body,function(err,data){
	if(err){
		throw err;
	}
	res.json(data);
})
})

app.get("/pagination", function(request,response){
Feedback.getContacts(function(err,data){

	if(err){
		throw err;
	}
	console.log("hello");
	console.log(data)
	response.json(data);
})

})

app.get("/popup/:id",function(req,res){
 	var id=req.params.id;
 	console.log(id);
 	Feedback.getFeedById(id,function(err,data){
 		if(err){
 			throw err;
 		}
 		console.log(data);
 		res.json(data);
 	})
 })

app.listen(PORT,function(){
	console.log("Server is running in number "+PORT);
});
