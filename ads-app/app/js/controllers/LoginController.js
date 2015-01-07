 adsApp.controller("LoginController", function LoginController($scope, $location, userData) {

     $scope.login = function(user) {
         userData.login(user)
         	.$promise
         	.then(function (data) {
         		$location.path("/");
         	});
     };
 });
