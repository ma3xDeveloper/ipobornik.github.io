 adsApp.controller("TownsListController", function TownsListController($scope,$rootScope, townsData, filter) {

 	//$scope.towns = townsData.getTowns();

     townsData.getTowns()
         .$promise
         .then(function(data) {
             $scope.towns = data;
         });

         $scope.townClicked = function(town) {
         	filter.filterByTown(town);
         	$rootScope.$on("townClicked", town);
         	// 3:30................................
         }
 });
