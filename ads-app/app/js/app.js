var adsApp = angular
    .module("adsApp", ["ngResource", "ngRoute", "LocalStorageModule"])
    .config(function($routeProvider, localStorageServiceProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "app/templates/home.html",
                controller: "AdsAppController"
            })
            .when("/my-ads", {
                templateUrl: "app/templates/my-ads-list.html",
                controller: "UserAdsController"
            })
            .when("/edit-my-ad", {
                templateUrl: "app/templates/display-edit-my-ad.html",
                controller: "EditAdsController"
            })
            .when("/publish", {
                templateUrl: "app/templates/publichnewad.html",
                controller: "PublishNewAdController"
            }) 
            .when("/editprofile", {
                templateUrl: "app/templates/edit-profile.html",
                controller: "EditProfileController"
            })
            .when("/login", {
                templateUrl: "app/templates/login.html",
                controller: "AdsAppController"
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