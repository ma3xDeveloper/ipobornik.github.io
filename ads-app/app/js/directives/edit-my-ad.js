adsApp.directive("editMyAdsList", function(){

		return {
			restrict: "E",
			controller: "EditAdsController",
			templateUrl: "app/templates/edit-my-ad.html",
			replace: true
		};
});