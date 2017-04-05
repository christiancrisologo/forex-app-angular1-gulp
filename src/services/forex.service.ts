/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/angular-route/index.d.ts"/>
module ForexApp{
	
	export interface IForexService {
        getAllRates() : ng.IPromise<ng.IHttpPromiseCallbackArg<Currency>[]>;
		getForexRate(base:string,symbol:string) : ng.IPromise<ng.IHttpPromiseCallbackArg<Currency>>;
	}
	
	class ForexService implements IForexService {
		
		static $inject = ["$http"];
		constructor(private $http : ng.IHttpService) {
			
		}

		getAllRates() : ng.IPromise<ng.IHttpPromiseCallbackArg<Currency>> {
			return this.$http.get(AppConstants.API_FIXER + "/latest");
		}	

		getForexRate(base:string,symbol:string) : ng.IPromise<ng.IHttpPromiseCallbackArg<Currency>> {
			return this.$http.get(`${AppConstants.API_FIXER}/latest?base=${base}&symbols=${symbol}` );
		}		
	}
	
    angular
	    .module("ForexApp")
    	.service("ForexService", ForexService);
}