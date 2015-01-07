adsApp.directive("publicAdsList", function(){

		return {
			restrict: "E",
			controller: "PublicAdsListController",
			templateUrl: "app/templates/public-ads-list.html",
			replace: true
		};
});