var adsApp = angular
    .module("adsApp", ["ngResource", "ngRoute"])
    .config(function($routeProvider) {
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

    });

adsApp.constant("baseServiceUrl", "http://softuni-ads.azurewebsites.net/api/");