adsApp.directive("leftPublicSidebar", function(){

		return {
			restrict: "E",
			controller: "HomeController",
			templateUrl: "app/templates/left-public-sidebar.html",
			replace: true
		};
});