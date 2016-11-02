var mongoose=require("mongoose");

var customSchema=mongoose.Schema({
	cname:{
		type:String,
		required:true
	},

	fname:{
		type:String,
		required:true
	},
	lname:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	mobile:{
		type:String,
		required:true
	},
	pwd:{
		type:String,
		required:true
	},
	cpwd:{
		type:String,
		required:true
	}
});
var custom=module.exports=mongoose.model("clientsignup",customSchema);
module.exports.addDetails=function(details,callback){

	custom.create(details,callback);
	
	console.log('inserted succesfully');
	
	
}
module.exports.getClientDetails=function(email,pwd,callback){
custom.findOne({'email': email,'pwd':pwd}, callback);
}
 module.exports.getClientData=function(id,callback){
 	//to fetch  single record we use findbyid
 	var query={_id:id}
 	custom.findById(query,callback)
 }
