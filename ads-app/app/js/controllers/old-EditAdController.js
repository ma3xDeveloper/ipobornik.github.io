 adsApp.controller("EditAdController",
     function EditController($scope, adsData) {


         $scope.saveAd = function(ad, newAdForm) {
             if (newAdForm.$valid) {
             	adsData.saveAd(ad);
                 alert("saved: " + ad.titleAd)
             } else {
                 alert("invalid data")
             }

             $scope.cancel = function() {
                 alert("cansel")
             }
         }
     });
