adsApp.controller("AdDetailsController",
    function AdDetailsController($scope, adsData) {

        adsData.getAd("data.json").then(function(data){
                $scope.ad = data;
        });
    });
