 adsApp.controller("CategoryListController", function CategoryListController($scope, categoryData) {

     categoryData.getCategories()
         .$promise
         .then(function(data) {
             $scope.categories = data;
         });
 });
