var app=angular.module("myapp",[]);
app.controller("mycontroller",["$scope","$http",function($scope,$http){
	var refresh=function(){
		$http.get("/clientlist").success(function(response){
			$scope.clientt=response;
			$scope.contact="";
		});
	}
	$http.get("/clientlist").success(function(response){
		console.log(response)
		$scope.clienttable=response;
	});