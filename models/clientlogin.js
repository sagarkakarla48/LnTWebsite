var mongoose=require("mongoose");

var clientLoginSchema=mongoose.Schema({

	user:{
		type:String,
		required:true
	},
	pwd:{
		type:String,
		required:true
	}
});
//module.exports is used for export data
var Client=module.exports=mongoose.model("clientdetails",clientLoginSchema);

module.exports.getClientDetails=function(callback){

Client.find(callback)
}
