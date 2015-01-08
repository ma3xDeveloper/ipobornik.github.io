 adsApp.controller("AdsAppController",
     function AdsAppController($scope, $location, authent, userData) {
         $scope.footerinfo = "SoftUni AngularJS Practical Project 2014";
         $scope.headerTitle = "Home";
         // Put the authService in the $scope to make it accessible from all screens
         /* $scope.authService = authService;*/

         $scope.isLoggedIn = authent.isLoggedIn();
         $scope.theusername = authent.getUsername();

         $scope.logoutClicked = function() {
             $scope.theusername.username = "";        
             userData.logOutUser("user");
         };
     });
