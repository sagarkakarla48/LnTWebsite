var mongoose=require("mongoose");

var contactSchema=mongoose.Schema({

	name:{
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
	}
});

