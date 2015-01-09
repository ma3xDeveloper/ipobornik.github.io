 adsApp.controller("CategoryListController", function CategoryListController($scope, $rootScope, categoryData, filter) {

     categoryData.getCategories()
         .$promise
         .then(function(data) {
             $scope.categories = data;
         });

     $scope.categoryClicked = function(category) {
         filter.filterByCategory(category);
         $rootScope.$broadcast("categoryClicked", category);

     };

 });


 // 3:08 ........................
 // 3:23 ........................

