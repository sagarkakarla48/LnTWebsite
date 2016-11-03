var App=angular.module("myApp",[]);
App.controller("myController",["$scope","$http",function($scope,$http){

var imglist=$http.get("carousaljson.json");
imglist.success(function(data){
$scope.carousalimages=data;
document.getElementById("divid").className="flexslider";
document.getElementById("ulid").className="slides";

setTimeout(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      })
	  },10);
});
}]);