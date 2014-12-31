adsApp.controller("AdDetailsController",
    function AdDetailsController($scope, adsData) {

        adsData.getAd("data.json", function(data) {
                $scope.ad = data;
            }

        );
    });
