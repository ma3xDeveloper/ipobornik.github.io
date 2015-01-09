 adsApp.controller("PublicAdsListController",
     function PublicAdsListController($scope, adsData, filter) {
         $scope.ready = false;

         function loadPublicAds(filterParams) {
             filterParams = filterParams || {};
             adsData.getPublicAds(filterParams)
                 .$promise
                 .then(function(data) {
                     $scope.adsData = data;
                     $scope.ready = true;
                 });	
         }

         loadPublicAds();

         $scope.$on("categoryClicked", function(event, category) {
             loadPublicAds(filter.getFilterParams());
         });

     });
