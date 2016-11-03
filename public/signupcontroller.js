var App=angular.module("signupApp",[]);
App.controller("signupController",["$scope","$http",function($scope,$http){

$scope.insert=function(){

$http.post('/signup',$scope.custom).success(function(res){

		console.log('entered into signup controller');
		console.log($scope.custom)
    if(res!=null)
    {
      alert("Registered successfully");
    window.location='login.html';
    }
	})
}

}]);