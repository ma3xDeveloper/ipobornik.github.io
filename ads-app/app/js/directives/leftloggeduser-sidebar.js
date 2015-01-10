adsApp.directive("leftLoggedUserSidebar", function(){

		return {
			restrict: "E",
			controller: "LoginController",
			templateUrl: "app/templates/leftloggeduser-sidebar.html",
			replace: true
		};
});