 adsApp.controller("PublicAdsListController",
     function PublicAdsListController($scope, adsData) {
     	$scope.ready = false;
         adsData.getPublicAds()
             .$promise
             .then(function(data) {
                 $scope.adsData = data;
                 $scope.ready = true;
             });
     });
