adsApp.directive("leftPublicSidebar", function(){
console.log("leftPublic");
		return {
			restrict: "E",
			controller: "HomeController",
			templateUrl: "app/templates/left-public-sidebar.html",
			replace: true
		};
});