 adsApp.controller("EditAdController",
     function EditController($scope) {


         $scope.saveAd = function(ad, newAdForm) {
             if (newAdForm.$valid) {
                 alert("saved: " + ad.titleAd)
             } else {
                 alert("invalid data")
             }

             $scope.cancel = function() {
                 alert("cansel")
             }
         }
     });
