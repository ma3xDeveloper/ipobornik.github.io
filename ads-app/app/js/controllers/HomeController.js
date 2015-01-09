 adsApp.controller("HomeController", 
 	function HomeController($scope, avtent){
 	$scope.headerTitle = "Home";
 	$scope.isLoggedIn = avtent.isLoggedIn();
 });

