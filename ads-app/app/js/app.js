var adsApp = angular
    .module("adsApp", ["ngResource", "ngRoute", "LocalStorageModule"])
    .config(function($routeProvider, localStorageServiceProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "app/templates/home.html",
                controller: "HomeController"
            })
            .when("/edit-ad", {
                templateUrl: "app/templates/edit-ad.html",
                controller: "LoginController"
            })
            .when("/details", {
                templateUrl: "app/templates/details.html",
                controller: "HomeController"
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