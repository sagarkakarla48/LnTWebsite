var app=angular.module("myapp",[]);
app.controller("mycntrl",["$scope","$http",function($scope,$http){
	var refresh=function(){
		
		$http.get("/clientlist/"+id).success(function(response){
			$scope.clienttable=response;
			console.log(response);
		});
	}
	refresh();
}]
);