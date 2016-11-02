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
 
 