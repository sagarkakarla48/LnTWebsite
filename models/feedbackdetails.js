var mongoose=require("mongoose");

var feedbackSchema=mongoose.Schema({

	q1:{
		type:String,
		required:true
	},
	q2:{
		type:String,
		required:true
	},
	q3:{
		type:String,
		required:true
	},
	q4:{
		type:String,
		required:true
	},
	q5:{
		type:String,
		required:true
	},
	q6:{
		type:String,
		required:true
	},
	q7:{
		type:String,
		required:true
	},
	q8:{
		type:String,
		required:true
	},
	clientid:{
		type:String
	},
	clientname:{
		type:String
	}
});
//module.exports is used for export data
var Feedback=module.exports=mongoose.model("feedbackdetails",feedbackSchema);


module.exports.getContacts=function(callback){

Feedback.find(callback)
}


module.exports.addContact=function(feedback,callback){

Feedback.create(feedback,callback);
}


module.exports.getContactById=function(id,callback){
var query={_id:id};
Feedback.findById(query,callback);
}

module.exports.updateContact=function(id,contact,callback){

Feedback.update({_id:id},
				{$set:
					{name:contact.name,
						email:contact.email,
						mobile:contact.mobile}
				},callback);
}

module.exports.deleteContact=function(id,callback){
var query={_id:id};
Feedback.remove(query,callback);
}