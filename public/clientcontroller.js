var app=angular.module("myapp",[]);
app.controller("mycntrl",["$scope","$http",function($scope,$http){
	var refresh=function(){
		var id='ObjectId("58188c2f300c184257537da2")';
		$http.get("/clientlist/"+id).success(function(response){
			$scope.clienttable=response;
			console.log(response);
		});
	}
	refresh();
}]
);