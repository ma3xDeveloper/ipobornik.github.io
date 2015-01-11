adsApp.directive("displayEditMyAd", function(){

		return {
			restrict: "E",
			controller: "EditAdsController",
			templateUrl: "app/templates/display-edit-my-ad.html",
			replace: true
		};
});