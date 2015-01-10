adsApp.directive("leftLoggedUserSidebar", function(){

		return {
			restrict: "E",
			controller: "AdsAppController",
			templateUrl: "app/templates/leftloggeduser-sidebar.html",
			replace: true
		};
});