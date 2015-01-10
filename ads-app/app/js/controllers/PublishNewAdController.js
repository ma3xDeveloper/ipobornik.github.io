 adsApp.controller("PublishNewAdController",
     function PublishNewAdController($scope, adsData, notifyService) {

         $scope.publishNewAdClicked = function(newAdObj) {
            console.log("newAdObj " + newAdObj.title);
            console.log("newAdObj " + newAdObj.text);
             adsData.postAd(newAdObj).$promise
                 .then(function() {
                     notifyService.popUpSuccsessMessages("The Ad is publiched successfully");
                 }, function(serverError) {
                     notifyService.popUpErrorMessageWithRestError("ERROR!", serverError);
                 });
         };
     });
