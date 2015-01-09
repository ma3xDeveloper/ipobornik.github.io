adsApp.directive("leftLoggedUserSidebar", function(){

		return {
			restrict: "E",
			controller: "LoggedInSidebarController",
			templateUrl: "app/templates/leftloggeduser-sidebar.html",
			replace: true
		};
});