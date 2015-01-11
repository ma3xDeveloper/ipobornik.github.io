 adsApp.controller("EditAdsController",
     function EditAdsController($scope, $location, adsData, notifyService) {
         var key = "id";

         $scope.editMyAdClicked = function(editAd) {
             localStorage.setItem(key, editAd.id);
         };

         $scope.publishEditedAdToServer = function(editedAdObj, id) {
             adsData.editAd(editedAdObj, id)
                 .$promise
                 .then(function() {
                     notifyService.popUpSuccsessMessages("The Ad EDITED successfully");
                     $location.path("/my-ads");
                 }, function(serverError) {
                     notifyService.popUpErrorMessageWithRestError("ERROR!", serverError);
                 });
         };

         var adId = localStorage.getItem(key);
         $scope.editAdData = adsData.getAdById(adId);



     });
