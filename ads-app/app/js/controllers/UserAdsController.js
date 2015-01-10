 adsApp.controller("UserAdsController",
     function UserAdsController($scope, adsData, notifyService) {
         adsData.getUserAds()
             .$promise
             .then(function(data) {
                 notifyService.popUpSuccsessMessages("The Ads are loadet successfully");
                 $scope.adsData = data;
                 $scope.ready = true;
             }, function(serverError) {
                 notifyService.popUpErrorMessageWithRestError("ERROR!", serverError);
             });
     });
