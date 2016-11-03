var App=angular.module("signupApp",[]);
App.controller("signupController",["$scope","$http",function($scope,$http){

$scope.insert=function(){
	
$http.get('/clientdupcheck/'+$scope.custom.email).success(function(res){
    if(res==null)
    {
    $http.post('/signup',$scope.custom).success(function(res){
    if(res!=null)
    {
    alert("Registered successfully");
    window.location='login.html';
    }
	})
    }else{
    	alert("Entered email already exists.");
    }
	})
}
}]);