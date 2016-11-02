var app=angular.module("myapp",[]);
app.controller("mycntrl",["$scope","$http","$location",function($scope,$http,$location){
	var refresh=function(){
		var id=$location.search().id;
		console.log(id);
		$http.get("/clientlist/"+id).success(function(response){
			$scope.clienttable=response;
			console.log(response);
		});
	}
	refresh();
}]
);