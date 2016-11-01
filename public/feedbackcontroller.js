var app=angular.module("feedbackApp",[]);
app.controller("feedbackController",["$scope","$http",function($scope,$http){

$scope.addFeedback=function(){
	console.log("in add method");
	$http.post("/feedbackList",$scope.feedback).success(function(response){
		console.log(response);
		
	})
}

}]);