adsApp.directive("myAdsList", function(){

		return {
			restrict: "E",
			controller: "UserAdsController",
			templateUrl: "app/templates/my-ads-list.html",
			replace: true
		};
});