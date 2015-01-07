adsApp.directive("category", function(){
		return {
			restrict: "E",
			controller: "CategoryListController",
			templateUrl: "app/templates/category.html",
			replace: true
		};
});