var mongoose=require("mongoose");
var clientSchema =mongoose.Schema({
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
	phone:{
		type:String,
		required:true
	}
});
var client=module.exports=mongoose.model("clienttable",clientSchema);
 
 module.exports.getClientdetails=function(id,callback){
 	//to fetch  single record we use findbyid
 	var query={_id:id}
 	client.findById(query,callback)
 }