var app=angular.module("loginApp",[]);
app.controller("loginController",["$scope","$http",function($scope,$http){
	
	

	$scope.clientLogin=function(){
	console.log("in get method");
	$http.get("/clientlogindetails",$scope.user,$scope.pwd).success(function(response){
		console.log(response);
		$scope.clienttable=response;
	});
}

}]);