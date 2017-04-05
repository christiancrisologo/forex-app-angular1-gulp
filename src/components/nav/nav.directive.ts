/// <reference path="../../../typings/globals/angular/index.d.ts" />
/// <reference path="../../../typings/globals/angular-route/index.d.ts"/>
module ForexApp{

    class AppNav implements ng.IDirective {

        static instance(): ng.IDirective {
            return new AppNav();
        }
 
        restrict = "E";
        replace = true;
        templateUrl = "/nav.html";    
        link($scope: ng.IScope, elm: Element, ngModel: ng.INgModelController): void {
        }
    }

    angular
        .module("ForexApp")
        .directive("appnav", AppNav.instance);
}