var express=require("express");
var app=express();
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
<<<<<<< HEAD
var Contact=require("./models/clientsignup");
var client=require("./models/client");
=======
var Feedback=require("./models/feedbackdetails");
var ClientLogin=require("./models/clientlogin");
>>>>>>> de5bc5bbe3c22436b96744b79d4e631d58399fd2
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

<<<<<<< HEAD
 		}
 		res.json(data);
 	})
 })
=======

app.post("/feedbackList",function(req,res){
	
var body=req.body;//will fetch body details

Feedback.addContact(body,function(err,data){
	if(err){
		throw err;
	}
		res.json(data);
})
})

app.post("/clientlogindetails",function(req,res){

ClientLogin.getClientDetails(body,function(err,data){
	if(err){
		throw err;
	}
		res.json(data);
})
})

>>>>>>> de5bc5bbe3c22436b96744b79d4e631d58399fd2

app.listen(PORT,function(){
	console.log("Server is running in number "+PORT);
});
