adsApp.directive("leftPublicSidebar", function(){

		return {
			restrict: "E",
			controller: "AdsAppController",
			templateUrl: "app/templates/left-public-sidebar.html",
			replace: true
		};
});