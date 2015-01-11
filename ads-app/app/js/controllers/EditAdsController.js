 adsApp.controller("EditAdsController",
     function EditAdsController($scope, $location, adsData, notifyService) {
         var idForEdit = "idForEdit";

         $scope.editMyAdClicked = function(editAd) {

             localStorage.setItem(idForEdit, editAd.id);
         };
         var getIdForEdit = localStorage.getItem(idForEdit);
         
             $scope.editAdData = adsData.getAdById(getIdForEdit);
                
       

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




  /*       $scope.deleteMyAdClicked = function(ad) {
             localStorage.setItem(idForDelete, ad.id);
         };
         var getIdForDelete = localStorage.getItem(idForDelete);
         if (getIdForDelete !== undefined) {
             adsData.deleteAd(getIdForDelete)
                 .$promise
                 .then(function() {
                     notifyService.popUpSuccsessMessages("The Ad DELETED successfully");
                     localStorage.removeItem(idForDelete);
                     $location.path("/my-ads");
                 }, function(serverError) {
                     notifyService.popUpErrorMessageWithRestError("ERROR!", serverError);
                 });

         }*/

  /*       $scope.makeAdInactiveClicked = function(ad) {
             localStorage.setItem(idForDeactive, ad.id);
         };
         var getIdForDeactive = localStorage.getItem(idForDeactive);
         if (getIdForDeactive) {
             adsData.deactiveAd(getIdForDeactive);
             localStorage.removeItem(idForDeactive);
             $location.path("/my-ads");

         }
*/


     });
