 adsApp.controller("RegisterController",
     function RegisterController($scope, $location, townsData, userData) {

         townsData.getTowns()
             .$promise
             .then(function(data) {
                 $scope.towns = data;
             });

         $scope.register = function(user) {
             userData.registerUser(user);
             $location.path("/home");

         };
     });
