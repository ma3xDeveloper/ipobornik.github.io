adsApp.directive("editProfile", function(){

		return {
			restrict: "E",
			controller: "EditProfileController",
			templateUrl: "app/templates/edit-profile.html",
			replace: true
		};
});