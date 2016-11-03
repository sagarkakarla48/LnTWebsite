var app=angular.module("feedbackApp",[]);
app.controller("feedbackController",["$scope","$http","$location",function($scope,$http,$location){

$scope.id=$location.search().id;
$scope.name=$location.search().name;

$scope.addFeedback=function(){
$scope.feedback.clientid=$scope.id;
$scope.feedback.clientname=$scope.name;
console.log($scope.feedback);
	$http.post("/feedbackList",$scope.feedback).success(function(response){
		console.log(response);
		if(response!=null){
			alert("Thank you for your valuable feedback");
			window.location="clientprofile.html#?id="+$scope.id;
		}
	})
}

}]);