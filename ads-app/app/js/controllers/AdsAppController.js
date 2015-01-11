 adsApp.controller("AdsAppController",
     function AdsAppController($scope, $location,$rootScope, authent, userData) {
         $scope.footerinfo = "SoftUni AngularJS Practical Project 2014";
         $scope.headerTitle = "Home";
         // Put the authService in the $scope to make it accessible from all screens
         /* $scope.authService = authService;*/

         $scope.isLoggedIn = authent.isLoggedIn();
         $scope.theusername = authent.getUsername();

         $scope.switchHeaderName = function() {
             var path = $location.path();

             if (path === "/home") {
                 return "home"; 
             }
             if (path === "/login") {
                 return "login";
             }

             //TODO switchin header names
         };

         $scope.login = function(user) {
             userData.login(user)
                 .$promise
                 .then(function() {
                     $location.path("/");
                 });
         };

         // TODO - Refreshing the page after login/logout


         $scope.logoutClicked = function() {
             $scope.theusername.username = "";
             userData.logOutUser("user");
         };


     });
