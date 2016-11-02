var app=angular.module("loginApp",[]);
app.controller("loginController",["$scope","$http",function($scope,$http){
	
	

	$scope.clientLogin=function(){
	console.log("in get method");
	$http.get("/clientlogindetails/"+$scope.email+"/"+$scope.pwd).success(function(response){
		if(response!=null){
			alert("Login successful");
			window.location="clientprofile.html";
		}else{
			alert("Username or password incorrect");
		}
	});
}

}]);