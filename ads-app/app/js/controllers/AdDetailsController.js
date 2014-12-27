adsApp.controller("AdDetailsController",
    function AdDetailsController($scope) {
        var ad = {
            titleAd: "iPhone 4S",
            dateOfCreation: "3-Jan-2015",
            descriptionAd: "I have iPhone 4S 16GB for sale. Good price. Like a new. Please call me in the evenings or at weekends.",
            authorName: "Victor",
            mail: "igra4a@abv.bg",
            phone: "+ 359 555 44 33 22"
        };

        $scope.ad = ad;
    });
