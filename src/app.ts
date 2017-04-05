/// <reference path="../typings/globals/angular/index.d.ts" />
/// <reference path="../typings/globals/angular-route/index.d.ts"/>

module ForexApp{
	"use strict";	


     function routes ($routeProvider: ng.route.IRouteProvider){
              
        $routeProvider

             .when("/home", {
                templateUrl: "/components/home/home.html",
                controller: "HomeController",
                controllerAs: "vm"
            })

            .when("/forex", {
                templateUrl: "/components/forex/forex.html",
                controller: "ForexController",
                controllerAs: "vm"
            })

            .when("/about", {
                templateUrl: "/components/about/about.html",
                controller: "AboutController",
                controllerAs: "vm"
            })

            .otherwise({
                redirectTo: "/home"
            });
    }

    routes.$inject = ["$routeProvider"];

	angular
		.module("ForexApp", ["ngRoute"])
		.config(routes);
}