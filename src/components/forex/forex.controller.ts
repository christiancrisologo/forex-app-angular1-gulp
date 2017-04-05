/// <reference path="../../../typings/globals/angular/index.d.ts" />
/// <reference path="../../../typings/globals/angular-route/index.d.ts"/>

module ForexApp {

	class ForexController {

		private currency: string;
		public rates: any[];

		public showDPBaseList: boolean = false;
		public showDPConverList: boolean = false;
		public selectedBaseRate: any;
		public selectedTargetRate:any;
		public calculatedResult: number;
		public amount: number = 0.0;
		public convertResult:any; 

		defaultBase:string = "AUD";
		defaultTarget:string   = "USD";

		static $inject = ["ForexService"];

		constructor(private forexService: IForexService) {
			forexService.getAllRates().then((resp: ng.IHttpPromiseCallbackArg<Currency>) => {
				let tmp: any = [];
	 
				for (var i in resp.data.rates) {
					tmp.push({ label: i, value: resp.data.rates[i] });
				}
				this.rates = tmp;
				this.selectedBaseRate = this.rates.filter(i=>i.label===this.defaultBase )[0];
				
				this.selectedTargetRate = this.rates.filter(i=>i.label===this.defaultTarget )[0];

			});
		}



		convert(e: any) {
			
			e.preventDefault();
			let base = this.selectedBaseRate && this.selectedBaseRate.label || "AUD";
			let symbol = this.selectedTargetRate && this.selectedTargetRate.label || "GBP";

			this.forexService.getForexRate(base, symbol)
				.then(
					(resp: ng.IHttpPromiseCallbackArg<Currency>) => {
					// console.log('==>',resp);
					this.convertResult = resp.data; 
					this.calculatedResult = this.calculate( this.amount, this.convertResult.rates[symbol] );
				});
		}

		// business logic calculation
		calculate(amount:number, base:number){
			return amount * base
		}
	}

	angular
		.module("ForexApp")
		.controller("ForexController", ForexController);
}