var app=angular.module("myApp",['angularUtils.directives.dirPagination']);

app.controller("pageCtrl",["$scope","$http",function($scope,$http){

	
	$http.get("/pagination").success(function(data){

	$scope.filteredItems=data;
	
})

$scope.openpopup=function(id){
		//document.getElementById("myModal").modal('show');

		$http.get("/popup/"+id).success(function(response){
			$scope.feeddetails=response;
			console.log(response);
			if(response!=null){
			$scope.q2=response.q2;
			$scope.q3=response.q3;
			$scope.q4=response.q4;
			$scope.q5=response.q5;
			$scope.q6=response.q6;
			$scope.q7=response.q7;
			$scope.q8=response.q8;
			popup();
			}
			
		});
	}

}])