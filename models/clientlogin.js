var mongoose=require("mongoose");

var clientLoginSchema=mongoose.Schema({

	name:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	}
});
//module.exports is used for export data
var Client=module.exports=mongoose.model("clientdetails",clientLoginSchema);

module.exports.getClientDetails=function(callback){

Client.find(callback)
}


module.exports.getClientDetailsById=function(id,callback){
var query={_id:id};
Client.findById(query,callback);
}