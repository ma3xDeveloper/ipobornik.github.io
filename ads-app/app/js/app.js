var adsApp = angular
    .module("adsApp", ["ngResource", "ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/edit-ad", {
                templateUrl: "app/templates/edit-ad.html"
            })
            .when("/details", {
            	 templateUrl: "app/templates/details.html"
            })
            .otherwise({
            	redirectTo: "/home"
            });
    });
