adsApp.directive("towns", function(){
		return {
			restrict: "E",
			controller: "TownsListController",
			templateUrl: "app/templates/towns.html",
			replace: true
		};
});