 adsApp.controller("PublishNewAdController",
     function PublishNewAdController($scope, adsData, notifyService, $location) {

         $scope.publishNewAdClicked = function(newAdObj) {
 
             adsData.postAd(newAdObj).$promise
                 .then(function() {
                     notifyService.popUpSuccsessMessages("The Ad is publiched successfully");
                     $location.path("/my-ads");
                 }, function(serverError) {
                     notifyService.popUpErrorMessageWithRestError("ERROR!", serverError);
                 });
         };
     });
