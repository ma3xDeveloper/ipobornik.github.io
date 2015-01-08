var adsApp = angular
    .module("adsApp", ["ngResource", "ngRoute", "LocalStorageModule"])
    .config(function($routeProvider, localStorageServiceProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "app/templates/home.html",
                controller: "AdsAppController"
            })
            .when("/myads", {
                templateUrl: "app/my-ads.html",
                controller: "?"
            })
            .when("/publich", {
                templateUrl: "app/templates/publich-new-ad.html",
                controller: "?"
            }) 
            .when("/editprofile", {
                templateUrl: "app/templates/edit-profile.html",
                controller: "?"
            })
            .when("/login", {
                templateUrl: "app/templates/login.html",
                controller: "LoginController"
            })
            .when("/register", {
                templateUrl: "app/templates/register.html",
                controller: "RegisterController"
            })
            .otherwise({
                redirectTo: "/home"
            });

            // Adding user to Web Storage
            localStorageServiceProvider.setStorageType("localStorage");
            localStorageServiceProvider.setPrefix("adsApp");

    });

adsApp.constant("baseServiceUrl", "http://softuni-ads.azurewebsites.net/api/");