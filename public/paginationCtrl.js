var app=angular.module("myApp",['angularUtils.directives.dirPagination']);

app.controller("pageCtrl",["$scope","$http",function($scope,$http){

	
	$http.get("/pagination").success(function(data){

	$scope.filteredItems=data;

	$scope.openpopup=function(id){
		alert("jjjj");
	}
	
})

}])