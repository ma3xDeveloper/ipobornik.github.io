 adsApp.controller("HomeController", 
 	function HomeController($scope, authent){
 	$scope.isLoggedIn = authent.isLoggedIn();
 });

