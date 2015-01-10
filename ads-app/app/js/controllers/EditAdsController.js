 adsApp.controller("EditAdsController",
     function EditAdsController($scope, $rootScope) {

         $scope.editMyAdClicked = function(editAd) {
             $scope.editAdData = editAd;
             console.log($scope.editAdData.title);
         };

     });
