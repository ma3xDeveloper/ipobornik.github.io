adsApp.controller("AdDetailsController",
    function AdDetailsController($scope, adsData) {

        $scope.ad = adsData.getAd("?pagesize=1");

        for (var p in $scope.ad) {
            console.log(p);
        }

        console.log( $scope.ad);

    });
