var express=require("express");
var app=express();
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var Feedback=require("./models/feedbackdetails");
var PORT=process.env.PORT || 3000;
var path = require('path');

mongoose.connect("mongodb://localhost/lntwebsite",function(){
	console.log("successfully connected to mogodb");
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


app.post("/feedbackList",function(req,res){
	
var body=req.body;//will fetch body details

Feedback.addContact(body,function(err,data){
	if(err){
		throw err;
	}
		res.json(data);
})
})


app.listen(PORT,function(){
	console.log("Server is running in number "+PORT);
});
