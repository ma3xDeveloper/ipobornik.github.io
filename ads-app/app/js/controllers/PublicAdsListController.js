 adsApp.controller("PublicAdsListController",
     function PublicAdsListController($scope, adsData, filter, notifyService) {
         $scope.ready = false;

         function loadPublicAds(filterParams) {
             filterParams = filterParams || {};
             adsData.getPublicAds(filterParams)
                 .$promise
                 .then(function(data) {
                     notifyService.popUpSuccsessMessages("The Ads are loadet successfully");
                     $scope.adsData = data;
                     $scope.ready = true;
                 }, function(serverError) {
                     notifyService.popUpErrorMessageWithRestError("ERROR!", serverError);
                 });
         }

         //TODO: addin all popUpSuccsessMessages and  popUpErrorMessageWithRestError

         loadPublicAds();

         $scope.$on("categoryClicked", function(event, category) {
             loadPublicAds(filter.getFilterParams());
         });

         $scope.$on("townClicked", function(event, category) {
             loadPublicAds(filter.getFilterParams());
         });

     });
