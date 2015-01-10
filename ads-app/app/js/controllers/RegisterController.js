 adsApp.controller("RegisterController", 
 	function RegisterController($scope, townsData, userData){
 	
 	townsData.getTowns()
 		.$promise
 		.then(function(data){
 			$scope.towns = data;
 		});

 	$scope.register= function(){
 		console.log("register invoked");
 		
 	};
 });

